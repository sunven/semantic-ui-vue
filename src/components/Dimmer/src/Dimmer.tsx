import { dimmerProps } from './Props'
import { SDimmerInner } from '../'
import { h, defineComponent } from 'vue'

export default defineComponent({
  props: dimmerProps,
  setup(props) {},
  render() {
    const { $props, page, $slots, $attrs } = this

    const inner = (
      <SDimmerInner {...$attrs} active={$props.active} page={$props.page}>
        {$slots.default}
      </SDimmerInner>
    )
    if (page) {
      return <teleport to="body">{inner}</teleport>
    }
    return inner
  },
})
