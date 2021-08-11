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

