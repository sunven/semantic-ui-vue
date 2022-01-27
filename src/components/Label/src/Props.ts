import { COLORS, SIZES } from '@/@types/sui'
import { PropType } from 'vue'
export const labelProps = {
  /** An element type to render as (string or function). */
  // as: PropTypes.elementType,

  /** A label can be active. */
  active: Boolean,

  /** A label can attach to a content segment. */
  attached: String as PropType<'top' | 'bottom' | 'top right' | 'top left' | 'bottom left' | 'bottom right'>,

  /** A label can reduce its complexity. */
  basic: Boolean,

  /** Primary content. */
  // children: PropTypes.node,

  /** A label can be circular. */
  circular: {
    type: Boolean,
  },

  /** Additional classes. */
  className: String,

  /** Color of the label. */
  color: String as PropType<COLORS>,

  /** Shorthand for primary content. */
  // content: customPropTypes.contentShorthand,

  /** A label can position itself in the corner of an element. */
  corner: [Boolean, String] as PropType<boolean | 'left' | 'right'>,

  /** Shorthand for LabelDetail. */
  detail: [String, Object],

  /** Formats the label as a dot. */
  empty: {
    type: Boolean,
  },

  /** Float above another element in the upper right corner. */
  floating: Boolean,

  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: Boolean,

  /** Shorthand for Icon. */
  icon: [String, Object],

  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: [Boolean, String, Object],

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: Function,

  /**
   * Adds an "x" icon, called when "x" is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onRemove: Function,

  /** A label can point to content next to it. */
  pointing: [Boolean, String] as PropType<boolean | 'above' | 'below' | 'left' | 'right'>,

  /** A label can prompt for an error in your forms. */
  prompt: Boolean,

  /** Shorthand for Icon to appear as the last child and trigger onRemove. */
  removeIcon: [String, Object],

  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: [Boolean, String] as PropType<boolean | 'right'>,

  /** A label can have different sizes. */
  size: String as PropType<SIZES>,

  /** A label can appear as a tag. */
  tag: Boolean,
}

export const labelDetailProps = {
  /** An element type to render as (string or function). */
  // as: PropTypes.elementType,

  /** Primary content. */
  // children: PropTypes.node,

  /** Additional classes. */
  className: String,

  /** Shorthand for primary content. */
  // content: customPropTypes.contentShorthand,
}

export const labelGroupProps = {
  /** An element type to render as (string or function). */
  // as: PropTypes.elementType,

  /** Primary content. */
  // children: PropTypes.node,

  /** Labels can share shapes. */
  circular: Boolean,

  /** Additional classes. */
  className: String,

  /** Label group can share colors together. */
  color: String as PropType<COLORS>,

  /** Shorthand for primary content. */
  // content: customPropTypes.contentShorthand,

  /** Label group can share sizes together. */
  size: String as PropType<SIZES>,

  /** Label group can share tag formatting. */
  tag: Boolean,
}
