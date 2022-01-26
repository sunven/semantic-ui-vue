# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## 问题

- How to import interface for defineProps <https://github.com/vuejs/core/issues/4294>
- 希望实现 props 的规则能有依赖 <https://github.com/vuejs/core/issues/5325>
- 组件的静态方法，例如 Label.create() 支持 ts

"lint-staged": {
"_.js": [
"prettier --write",
"eslint --fix"
],
"_.ts": [
"prettier --write",
"eslint --fix"
],
"_.tsx": [
"prettier --write",
"eslint --fix"
],
"_.vue": [
"prettier --parser=vue --write",
"eslint --fix"
],
"_.css": [
"prettier --write"
],
"_.md": [
"prettier --write --parser markdown --prose-wrap never",
"eslint --fix"
]
},
