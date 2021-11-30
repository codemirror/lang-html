## 0.19.4 (2021-11-30)

### Bug fixes

Fix an issue where autoclosing a tag directly in front of alphanumeric text would include nonsense text in the completed tag name.

## 0.19.3 (2021-09-23)

### New features

The package now exports a completion source function, rather than a prebuilt completion extension.

Use more specific highlighting tags for attribute names and values.

## 0.19.2 (2021-09-21)

### New features

The new `autoCloseTags` extension (included by default in `html()`) finishes closing tags when you type a `>` or `/` character.

## 0.19.1 (2021-08-11)

### Bug fixes

Fix incorrect versions for @lezer dependencies.

## 0.19.0 (2021-08-11)

### Bug fixes

Improve autocompletion in/after unclosed opening tags.

### New features

`html()` now takes a `matchClosingTags` option to turn off closing tag matching.

## 0.18.1 (2021-05-05)

### Bug fixes

Fix an issue where the completer would sometimes try to complete an opening tag to its own close tag.

Fix a bug that would sometimes produce the wrong indentation in HTML elements.

Fix a bug that broke tag-specific attribute completion in tags like `<input>` or `<script>`.

Move a new version of lezer-html which solves some issues with autocompletion.

## 0.18.0 (2021-03-03)

### Bug fixes

Improves indentation at end of implicitly closed elements.

## 0.17.1 (2021-01-06)

### New features

The package now also exports a CommonJS module.

## 0.17.0 (2020-12-29)

### Breaking changes

First numbered release.

