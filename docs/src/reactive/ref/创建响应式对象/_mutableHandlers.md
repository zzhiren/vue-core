### mutableHandlers

> Object Array 类型数据创建 `Proxy` 代理对象时使用 `mutableHandlers` 作为 `handler`，下文会将 `mutableHandlers` 的所有属性分开讲解

```ts
export const mutableHandlers: ProxyHandler<object> = /*#__PURE__*/ new MutableReactiveHandler()
```

::: code-group

```ts [MutableReactiveHandler]
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow = false) {
    super(false, isShallow)
  }
  /** target: 原始对象，key: target的key，receiver: Proxy代理对象或者继承Proxy的对象 */
  set(target: object, key: string | symbol, value: unknown, receiver: object): boolean;
  deleteProperty(target: object, key: string | symbol): boolean;
  has(target: object, key: string | symbol): boolean;
  ownKeys(target: object): (string | symbol)[];
}

class BaseReactiveHandler implements ProxyHandler<Target> {
  constructor(
    protected readonly _isReadonly = false,
    protected readonly _isShallow = false,
  ) {}
  get(target: Target, key: string | symbol, receiver: object);
}

```

```ts [get]
class MutableReactiveHandler {
  get(target: Target, key: string | symbol, receiver: object) {
    // 使用ref创建对象时，_isReadonly=false, isShallow=false
    const isReadonly = this._isReadonly,
      isShallow = this._isShallow
    if (key === ReactiveFlags.IS_REACTIVE) {
      // key === '__v_isReactive' 判断该数据是否为 响应式数据，因为 isReadonly与__v_isReactive属性值肯定是相反的
      return !isReadonly
    } else if (key === ReactiveFlags.IS_READONLY) {
       // key === '__v_isReadonly' 返回当前 isReadonly 属性
      return isReadonly
    } else if (key === ReactiveFlags.IS_SHALLOW) {
      // key === '__v_isShallow' 返回当前 isShallow 属性
      return isShallow
    } else if (key === ReactiveFlags.RAW) {
      // key === '__v_raw'
      // 通过响应式对象类型从对应缓存 Map 中取出 target 对象的 Proxy 对象
      // ref创建的对象缓存在 reactiveMap 中
      if (
        receiver ===
          (isReadonly
            ? isShallow
              ? shallowReadonlyMap
              : readonlyMap
            : isShallow
              ? shallowReactiveMap
              : reactiveMap
          ).get(target) ||
        // receiver is not the reactive proxy, but has the same prototype
        // this means the reciever is a user proxy of the reactive proxy
        // 判断 receiver 对象是否为 target 的 代理对象
        Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)
      ) {
        return target
      }
      // early return undefined
      return
    }

    const targetIsArray = isArray(target)

    if (!isReadonly) {
      // 如果对象是一个数组且 key 是数组特定的方法或属性，则直接从 arrayInstrumentations 中获取该方法或属性。
      if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver)
      }

      // 如果 key 是 'hasOwnProperty'，则返回 hasOwnProperty 函数。
      if (key === 'hasOwnProperty') {
        return hasOwnProperty
      }
    }

    // 使用 Reflect.get 获取 target 的 key 属性值。
    const res = Reflect.get(target, key, receiver)

    // 如果 key 是内置的符号或不可追踪的键（例如一些特殊的、不应触发依赖收集的键），则直接返回属性值。
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res
    }

    // 如果不是只读数据，则进行依赖收集
    if (!isReadonly) {
      // 依赖收集
      track(target, TrackOpTypes.GET, key)
    }

    // 如果对象是浅层响应式，则直接返回值
    if (isShallow) {
      return res
    }

    if (isRef(res)) {
      // ref unwrapping - skip unwrap for Array + integer key.
      // 如果返回的值是一个 ref 对象（这在 Vue 的 Composition API 中常见），
      // 并且它不是数组索引（即不是用于数组的整数键），则解包并返回其值。
      return targetIsArray && isIntegerKey(key) ? res : res.value
    }

    if (isObject(res)) {
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      // 如果返回的值是一个对象，则递归地将其转换为响应式或只读代理（取决于当前对象是否只读）
      return isReadonly ? readonly(res) : reactive(res)
    }

    return res
  }
}
```

```ts [set]
class MutableReactiveHandler {
  set(
    target: object,
    key: string | symbol,
    value: unknown,
    receiver: object,
  ): boolean {
    let oldValue = (target as any)[key]
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue)
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue)
        value = toRaw(value)
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return false
        } else {
          oldValue.value = value
          return true
        }
      }
    } else {
      // in shallow mode, objects are set as-is regardless of reactive or not
    }

    const hadKey =
      isArray(target) && isIntegerKey(key)
        ? Number(key) < target.length
        : hasOwn(target, key)
    const result = Reflect.set(target, key, value, receiver)
    // don't trigger if target is something up in the prototype chain of original
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, TriggerOpTypes.ADD, key, value)
      } else if (hasChanged(value, oldValue)) {
        trigger(target, TriggerOpTypes.SET, key, value, oldValue)
      }
    }
    return result
  }
}
```

```ts [deleteProperty]
class MutableReactiveHandler {
  deleteProperty(target: object, key: string | symbol): boolean {
    const hadKey = hasOwn(target, key)
    const oldValue = (target as any)[key]
    const result = Reflect.deleteProperty(target, key)
    if (result && hadKey) {
      trigger(target, TriggerOpTypes.DELETE, key, undefined, oldValue)
    }
    return result
  }
}
```

```ts [has]
class MutableReactiveHandler {
  has(target: object, key: string | symbol): boolean {
    const result = Reflect.has(target, key)
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, TrackOpTypes.HAS, key)
    }
    return result
  }
}
```

```ts [ownKeys]
class MutableReactiveHandler {
  ownKeys(target: object): (string | symbol)[] {
    track(
      target,
      TrackOpTypes.ITERATE,
      isArray(target) ? 'length' : ITERATE_KEY,
    )
    return Reflect.ownKeys(target)
  }
}
```
