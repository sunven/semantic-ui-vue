import { FLOATS, SIZES, VERTICAL_ALIGNMENTS } from '@/@types/sui'
import { PropType } from 'vue'

export const imageProps = {
  /** An element type to render as (string or function). */
  // as: PropTypes.elementType,

  /** An image may be formatted to appear inline with text as an avatar. */
  avatar: Boolean,

  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered: Boolean,

  /** An image can appear centered in a content block. */
  centered: Boolean,

  /** Primary content. */
  // children: PropTypes.node,

  /** An image may appear circular. */
  circular: Boolean,

  /** Additional classes. */
  className: String,

  /** Shorthand for primary content. */
  // content: customPropTypes.contentShorthand,

  /** An image can show that it is disabled and cannot be selected. */
  disabled: Boolean,

  /** Shorthand for Dimmer. */
  dimmer: [String, Object],

  /** An image can sit to the left or right of other content. */
  floated: String as PropType<FLOATS>,

  /** An image can take up the width of its container. */
  fluid: [Boolean],

  /** An image can be hidden. */
  hidden: Boolean,

  /** Renders the Image as an <a> tag with this href. */
  href: String,

  /** An image may appear inline. */
  inline: Boolean,

  /** Shorthand for Label. */
  label: [String, Object],

  /** An image may appear rounded. */
  rounded: Boolean,

  /** An image may appear at different sizes. */
  size: String as PropType<SIZES>,

  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: [Boolean, String] as PropType<Boolean | 'left' | 'right'>,

  /** Whether or not to add the ui className. */
  ui: Boolean,

  /** An image can specify its vertical alignment. */
  verticalAlign: String as PropType<VERTICAL_ALIGNMENTS>,

  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: Boolean,
}
