# ref

源码地址
> core/packages/reactivity/src/ref.ts

类型定义

```ts
export interface Ref<T = any> {
  value: T
  /**
   * Type differentiator only.
   * We need this to be in public d.ts but don't want it to show up in IDE
   * autocomplete, so we use a private Symbol instead.
   */
  [RefSymbol]: true
}
```

使用方法

```ts
const obj = ref({})
```


















