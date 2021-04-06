import {parser, configureNesting} from "lezer-html"
import {cssLanguage, css} from "@codemirror/lang-css"
import {javascriptLanguage, javascript} from "@codemirror/lang-javascript"
import {LezerLanguage, indentNodeProp, foldNodeProp, LanguageSupport} from "@codemirror/language"
import {styleTags, tags as t} from "@codemirror/highlight"
import {completeHTML} from "./complete"

/// A language provider based on the [Lezer HTML
/// parser](https://github.com/lezer-parser/html), wired up with the
/// JavaScript and CSS parsers to parse the content of `<script>` and
/// `<style>` tags.
export const htmlLanguage = LezerLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Element(context) {
          let after = /^(\s*)(<\/)?/.exec(context.textAfter)!
          if (context.node.to <= context.pos + after[0].length) return context.continue()
          return context.lineIndent(context.state.doc.lineAt(context.node.from)) + (after[2] ? 0 : context.unit)
        },
        "OpenTag CloseTag SelfClosingTag"(context) {
          return context.column(context.node.from) + context.unit
        },
        Document(context) {
          if (context.pos + /\s*/.exec(context.textAfter)![0].length < context.node.to)
            return context.continue()
          let endElt = null, close
          for (let cur = context.node;;) {
            let last = cur.lastChild
            if (!last || last.name != "Element" || last.to != cur.to) break
            endElt = cur = last
          }
          if (endElt && !((close = endElt.lastChild) && (close.name == "CloseTag" || close.name == "SelfClosingTag")))
            return context.lineIndent(context.state.doc.lineAt(endElt.from)) + context.unit
          return null
        }
      }),
      foldNodeProp.add({
        Element(node) {
          let first = node.firstChild, last = node.lastChild!
          if (!first || first.name != "OpenTag") return null
          return {from: first.to, to: last.name == "CloseTag" ? last.from : node.to}
        }
      }),
      styleTags({
        AttributeValue: t.string,
        "Text RawText": t.content,
        "StartTag StartCloseTag SelfCloserEndTag EndTag SelfCloseEndTag": t.angleBracket,
        TagName: t.tagName,
        "MismatchedCloseTag/TagName": [t.tagName,  t.invalid],
        AttributeName: t.propertyName,
        UnquotedAttributeValue: t.string,
        Is: t.definitionOperator,
        "EntityReference CharacterReference": t.character,
        Comment: t.blockComment,
        ProcessingInst: t.processingInstruction,
        DoctypeDecl: t.documentMeta
      })
    ],
    nested: configureNesting([
      {tag: "script",
       attrs(attrs) {
         return !attrs.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(attrs.type)
       },
       parser: javascriptLanguage.parser},
      {tag: "style",
       attrs(attrs) {
         return (!attrs.lang || attrs.lang == "css") && (!attrs.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(attrs.type))
       },
       parser: cssLanguage.parser}
    ])
  }),
  languageData: {
    commentTokens: {block: {open: "<!--", close: "-->"}},
    indentOnInput: /^\s*<\/$/
  }
})

/// HTML tag completion. Opens and closes tags and attributes in a
/// context-aware way.
export const htmlCompletion = htmlLanguage.data.of({autocomplete: completeHTML})

/// Language support for HTML, including
/// [`htmlCompletion`](#lang-html.htmlCompletion) and JavaScript and
/// CSS support extensions.
export function html() {
  return new LanguageSupport(htmlLanguage, [htmlCompletion, javascript().support, css().support])
}
