import { h } from 'vue'
export function createComp<T>(Comp: T, val: any, map?: (val: any) => object) {
  if (!val) {
    return
  }
  if (typeof val === 'boolean') {
    return h(Comp)
  }
  if (typeof val === 'string') {
    if (map) {
      return h(Comp, map(val))
    }
    return h(Comp, null, val)
  }
  if (typeof val === 'object') {
    return h(Comp, val)
  }
}
