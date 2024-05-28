# ref

源码地址
> core/packages/reactivity/src/ref.ts

<!--@include: ../_common.md-->

## 创建ref

通过 `ref` 创建一个对象，最终会返回一个 `class RefImpl` 的实例化对象

::: code-group

```vue [demo.vue]
<template> </template>  

<script setup lang="ts">
  import { ref } form 'vue'
  const obj = ref({
    name: 'vue'
  })
</script>
```

```ts [ref.ts]
export function ref(value?: unknown) {
  return createRef(value, false)
}

function createRef(rawValue: unknown, shallow: boolean) {
  // 如果当前值已经是一个 ref 对象，直接返回
  if (isRef(rawValue)) {
    return rawValue
  }
  return new RefImpl(rawValue, shallow)
}
```

:::

## 实例化RefImpl

实例化 `RefImpl` 的过程中，通过 `toReactive` 创建响应式数据并赋值给私有属性 `_value`，并且通过暴露 `get value()` 属性来访问 `_value`，最终达到如下效果

```ts
const obj = ref({ name: 'vue' })

console.log(obj.value) // { name: 'vue' }

```

::: code-group

```ts [RefImpl] {16,17}

class RefImpl<T> {
  private _value: T
  private _rawValue: T

  public dep?: Dep = undefined
  // 标记当前变量为ref响应式数据
  public readonly __v_isRef = true

  constructor(
    value: T,
    /** shallowRef创建响应式数据时使用 */
    public readonly __v_isShallow: boolean,
  ) {
    // _rawValue：vue创建的 Proxy 对象的原始对象数据
    this._rawValue = __v_isShallow ? value : toRaw(value) // reactive.toRaw
    this._value = __v_isShallow ? value : toReactive(value) // reactive.toReactive
  }

  get value() {
    trackRefValue(this)
    return this._value
  }

  set value(newVal) {
    // useDirectValue： true-shallowRef数据，false-ref数据
    const useDirectValue =
      this.__v_isShallow || // shallowRef标识
      isShallow(newVal) || // shallowRef判断
      isReadonly(newVal) //  只读数据标识

    // 如果是shallowRef创建的数据则直接赋值，反之使用toRaw解除代理，返回原始对象
    // toRaw() https://cn.vuejs.org/api/reactivity-advanced.html#toraw
    newVal = useDirectValue ? newVal : toRaw(newVal)
    // 判断数据是否发生变更
    if (hasChanged(newVal, this._rawValue)) {
      // shallowRef数据直接赋值
      this._rawValue = newVal
      // ref数据通过 toReactive 将内部数据使用proxy代理
      this._value = useDirectValue ? newVal : toReactive(newVal)
      // 触发依赖
      // TODO 有哪些依赖类型要触发，dom、computed、effect... ?
      triggerRefValue(this, DirtyLevels.Dirty, newVal)
    }
  }
}
```

```ts [reactive.ts] {26,27}
import { mutableHandlers } from './baseHandlers'
import { mutableCollectionHandlers } from './collectionHandlers'

export const reactiveMap = new WeakMap<Target, any>()

export const toReactive = <T extends unknown>(value: T): T => {
  // isObject(value) ? reactive(value) : value // 原代码

  /** 创建响应式数据时，如果是对象，则用reactive处理，基本类型直接返回 */
  if (isObject(value)) {
    return reactive(value)
  } else {
    return value
  }
}

export function reactive(target: object) {
  // if trying to observe a readonly proxy, return the readonly version.
  // 判断是否为只读对象
  if (isReadonly(target)) {
    return target
  }
  return createReactiveObject(
    target, 
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap,
  )
}


```

:::

<!--@include: ./创建响应式对象/index.md-->