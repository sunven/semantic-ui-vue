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

<https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCBDb21wIGZyb20gJy4vQ29tcC52dWUnXG4gIGltcG9ydCBDb21wQSBmcm9tICcuL0NvbXBBLnZ1ZSdcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgQ29tcCA6XG4gICAgPENvbXAgYT1cIjFcIiBuYW1lPVwiYVwiPjwvQ29tcD5cbiAgICBDb21wQSA6XG4gICAgIDxDb21wQSBhPVwiMVwiIG5hbWU9XCJhXCI+PC9Db21wQT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vdW5wa2cuY29tL0B2dWUvcnVudGltZS1kb21AMy4yLjI5L2Rpc3QvcnVudGltZS1kb20uZXNtLWJyb3dzZXIuanNcIlxuICB9XG59IiwiQ29tcC52dWUiOiI8c2NyaXB0IHNldHVwPlxuaW1wb3J0IENvbXBDaGlsZCBmcm9tICcuL0NvbXBDaGlsZC52dWUnXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxDb21wQ2hpbGQ+PC9Db21wQ2hpbGQ+XG48L3RlbXBsYXRlPiIsIkNvbXBDaGlsZC52dWUiOiI8c2NyaXB0IHNldHVwPlxuY29uc3QgcHJvcHM9ZGVmaW5lUHJvcHMoe25hbWU6U3RyaW5nfSlcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICBDb21wQ2hpbGQtcHJvcHM6IHt7JHByb3BzfX1cbiAgIDxicj5cbiAgIENvbXBDaGlsZC1hdHJyczoge3skYXR0cnN9fVxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+IiwiQ29tcEEudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCBDb21wQ2hpbGQgZnJvbSAnLi9Db21wQ2hpbGQudnVlJ1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8Q29tcENoaWxkPjwvQ29tcENoaWxkPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+In0>=

When a custom component is used as the root, attr is automatically passed

1.attr should not be automatically passed from parent component to child component
2.Under the above premise, if attr and prop have the same name, attr should not overwrite prop
3.When a custom component is used as a root, it should behave as if it were wrapped in a div

1.attr(a) on Comp is automatically passed to CompChild, but not on CompA
2.attr (name) in comP is passed to props (name) of CompChild
