# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## 问题

- How to import interface for defineProps <https://github.com/vuejs/core/issues/4294>
- 希望实现 props 的规则能有依赖 <https://github.com/vuejs/core/issues/5325>
- 组件的静态方法，例如 Label.create() 支持 ts
- the attrs from parent overrwriting explicit props in the child <https://github.com/vuejs/core/issues/5333>

## Heads up

- 结构会使数据失去响应式
- 单项数据流概率牢记，不要尝试在子组件修改 props,
- attrs 和 props 的区别，attrs 不是响应式
