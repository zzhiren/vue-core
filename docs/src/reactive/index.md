
# 全局属性

## 响应式数据缓存

```ts
/** ref() reactive() 数据缓存 */
export const reactiveMap = new WeakMap<Target, any>()

/** shallowReactive() 数据缓存 */
export const shallowReactiveMap = new WeakMap<Target, any>()

/** readonly() 数据缓存 */
export const readonlyMap = new WeakMap<Target, any>()

/** shallowReadonly() 数据缓存*/
export const shallowReadonlyMap = new WeakMap<Target, any>()
```

## 枚举

### TrackOpTypes

```ts
export enum TrackOpTypes {
  GET = 'get',
  HAS = 'has',
  ITERATE = 'iterate',
}
```

### TriggerOpTypes

```ts
export enum TriggerOpTypes {
  SET = 'set',
  ADD = 'add',
  DELETE = 'delete',
  CLEAR = 'clear',
}
```

### ReactiveFlags

```ts
export enum ReactiveFlags {
  /* 用于跳过对当前属性的依赖追踪。在某些情况下，例如遍历对象属性时，可能需要跳过对特定属性的依赖追踪，以避免不必要的性能开销。 */
  SKIP = '__v_skip',
  /* 表示当前对象是否已经是一个响应式对象。如果该标志位被设置，表示当前对象已经被转换为了响应式对象。 */
  IS_REACTIVE = '__v_isReactive',
  /* 表示当前对象是否是只读的。当一个响应式对象被标记为只读时，任何尝试修改其属性的操作都会被阻止，以确保对象的不可变性。 */
  IS_READONLY = '__v_isReadonly',
  /* 表示当前对象是否是浅层响应式的。在 Vue 3 中，可以选择将对象转换为浅层响应式对象，即只对对象的顶层属性进行响应式转换，而不会递归地将其内部所有属性都转换为响应式。 */
  IS_SHALLOW = '__v_isShallow',
  /* 表示当前对象是否是一个原始对象。原始对象是指普通的非响应式对象，它们没有被转换为响应式对象。 */
  RAW = '__v_raw',
}
```

### DirtyLevels

```ts
export enum DirtyLevels {
  NotDirty = 0,
  QueryingDirty = 1,
  MaybeDirty_ComputedSideEffect = 2,
  MaybeDirty = 3,
  Dirty = 4,
}
```