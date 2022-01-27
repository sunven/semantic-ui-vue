import { h, DefineComponent } from 'vue';
export function createComp(Comp: DefineComponent<any, any, any>, val: any, map?: (val: any) => object) {
  if (!val) {
    return;
  }
  if (typeof val === 'boolean') {
    return h(Comp);
  }
  if (typeof val === 'string') {
    if (map) {
      return h(Comp, map(val));
    }
    return h(Comp, null, val);
  }
  if (typeof val === 'object') {
    return h(Comp, val);
  }
}
