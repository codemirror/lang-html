<!-- NOTE: README.md is generated from src/README.md -->

# @codemirror/lang-html [![NPM version](https://img.shields.io/npm/v/@codemirror/lang-html.svg)](https://www.npmjs.org/package/@codemirror/lang-html)

[ [**WEBSITE**](https://codemirror.net/6/) | [**ISSUES**](https://github.com/codemirror/codemirror.next/issues) | [**FORUM**](https://discuss.codemirror.net/c/next/) | [**CHANGELOG**](https://github.com/codemirror/lang-html/blob/main/CHANGELOG.md) ]

This package implements HTML language support for the
[CodeMirror](https://codemirror.net/6/) code editor.

The [project page](https://codemirror.net/6/) has more information, a
number of [examples](https://codemirror.net/6/examples/) and the
[documentation](https://codemirror.net/6/docs/).

This code is released under an
[MIT license](https://github.com/codemirror/lang-html/tree/main/LICENSE).

We aim to be an inclusive, welcoming community. To make that explicit,
we have a [code of
conduct](http://contributor-covenant.org/version/1/1/0/) that applies
to communication around the project.

## API Reference
<dl>
<dt id="user-content-html">
  <code><strong><a href="#user-content-html">html</a></strong>() → <a href="https://codemirror.net/6/docs/ref#language.LanguageSupport">LanguageSupport</a></code></dt>

<dd><p>Language support for HTML, including
<a href="#user-content-htmlcompletion"><code>htmlCompletion</code></a> and JavaScript and
CSS support extensions.</p>
</dd>
<dt id="user-content-htmllanguage">
  <code><strong><a href="#user-content-htmllanguage">htmlLanguage</a></strong>: <a href="https://codemirror.net/6/docs/ref#language.LezerLanguage">LezerLanguage</a></code></dt>

<dd><p>A language provider based on the <a href="https://github.com/lezer-parser/html">Lezer HTML
parser</a>, wired up with the
JavaScript and CSS parsers to parse the content of <code>&lt;script&gt;</code> and
<code>&lt;style&gt;</code> tags.</p>
</dd>
<dt id="user-content-htmlcompletion">
  <code><strong><a href="#user-content-htmlcompletion">htmlCompletion</a></strong>: <a href="https://codemirror.net/6/docs/ref#state.Extension">Extension</a></code></dt>

<dd><p>HTML tag completion. Opens and closes tags and attributes in a
context-aware way.</p>
</dd>
</dl>
