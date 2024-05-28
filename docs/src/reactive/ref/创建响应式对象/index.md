## 创建响应式对象

`createReactiveObject` 使用 `Proxy` 代理 `target` 原始对象，并将代理对象缓存到全局 `reactiveMap` 中。

::: tip
`proxyMap` 即 `reactiveMap`

注意：`proxyMap.set(target, proxy)` 中的 `target` 是`地址值`，并不是其对象本身，所以变更 `target` 属性并不会改变 proxyMap 中对应的 key。
:::

::: code-group

```ts [createReactiveObject]
function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>,
  proxyMap: WeakMap<Target, any>,
) {
  if (!isObject(target)) {
    if (__DEV__) {
      warn(`value cannot be made reactive: ${String(target)}`)
    }
    return target
  }
  // target 如果已经是一个 Proxy 对象， 则直接返回
  // ReactiveFlags.RAW = '__v_raw'
  // ReactiveFlags.IS_REACTIVE = '__v_isReactive'
  if (
    target[ReactiveFlags.RAW] &&
    !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
  ) {
    return target
  }
  // 判断 reactiveMap 中是否存在 target 对应的 Proxy 对象，有则直接返回存在的Proxy对象
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }
  // 仅特定类型的值可以观察。
  const targetType = getTargetType(target)
  if (targetType === TargetType.INVALID) {
    return target
  }

  // Object Array 类型使用 baseHandlers
  // Map Set WeakMap WeakSet 类型使用 collectionHandlers
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers,
  )
  // 将响应式对象存入全局缓存中
  proxyMap.set(target, proxy)
  return proxy
}
```

```ts [handlers]
export const mutableHandlers: ProxyHandler<object> = /*#__PURE__*/ new MutableReactiveHandler()

export const mutableCollectionHandlers: ProxyHandler<CollectionTypes> = {
  get: /*#__PURE__*/ createInstrumentationGetter(false, false),
}

```

:::

<!-- ### mutableHandlers -->
<!--@include: ./_mutableHandlers.md-->

### collectionHandlers

:::code-group

```ts [collectionHandlers]
function createInstrumentationGetter(isReadonly: boolean, shallow: boolean) {
  const instrumentations = shallow
    ? isReadonly
      ? shallowReadonlyInstrumentations
      : shallowInstrumentations
    : isReadonly
      ? readonlyInstrumentations
      : mutableInstrumentations

  return (
    target: CollectionTypes,
    key: string | symbol,
    receiver: CollectionTypes,
  ) => {
    if (key === ReactiveFlags.IS_REACTIVE) {
      return !isReadonly
    } else if (key === ReactiveFlags.IS_READONLY) {
      return isReadonly
    } else if (key === ReactiveFlags.RAW) {
      return target
    }

    return Reflect.get(
      hasOwn(instrumentations, key) && key in target
        ? instrumentations
        : target,
      key,
      receiver,
    )
  }
}
```

:::
