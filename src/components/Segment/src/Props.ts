import { COLORS, FLOATS, SIZES, TEXT_ALIGNMENTS } from '@/@types/sui'
import { PropType } from 'vue'

export const segmentProps = {
  /** An element type to render as (string or function). */
  // as: PropTypes.elementType,

  /** Attach segment to other content, like a header. */
  attached: [Boolean, String] as PropType<boolean | 'top' | 'bottom'>,

  /** A basic segment has no special formatting. */
  basic: Boolean,

  /** Primary content. */
  // children: PropTypes.node,

  /** A segment can be circular. */
  circular: Boolean,

  /** Additional classes. */
  className: String,

  /** A segment can clear floated content. */
  clearing: Boolean,

  /** Segment can be colored. */
  color: String as PropType<COLORS>,

  /** A segment may take up only as much space as is necessary. */
  compact: Boolean,

  /** Shorthand for primary content. */
  // content: customPropTypes.contentShorthand,

  /** A segment may show its content is disabled. */
  disabled: Boolean,

  /** Segment content can be floated to the left or right. */
  floated: String as PropType<FLOATS>,

  /** A segment can have its colors inverted for contrast. */
  inverted: Boolean,

  /** A segment may show its content is being loaded. */
  loading: Boolean,

  /** A segment can increase its padding. */
  padded: [Boolean, String] as PropType<boolean | 'very'>,

  /** A segment can be used to reserve space for conditionally displayed content. */
  placeholder: Boolean,

  /** Formatted to look like a pile of pages. */
  piled: Boolean,

  /** A segment may be formatted to raise above the page. */
  raised: Boolean,

  /** A segment can be formatted to appear less noticeable. */
  secondary: Boolean,

  /** A segment can have different sizes. */
  size: String as PropType<Exclude<SIZES, 'medium'>>,

  /** Formatted to show it contains multiple pages. */
  stacked: Boolean,

  /** A segment can be formatted to appear even less noticeable. */
  tertiary: Boolean,

  /** Formats content to be aligned as part of a vertical group. */
  textAlign: String as PropType<Exclude<TEXT_ALIGNMENTS, 'justified'>>,

  /** Formats content to be aligned vertically. */
  vertical: Boolean,
}

export const segmentGroupProps = {
  /** An element type to render as (string or function). */
  // as: PropTypes.elementType,

  /** Primary content. */
  // children: PropTypes.node,

  /** Additional classes. */
  className: String,

  /** A segment may take up only as much space as is necessary. */
  compact: Boolean,

  /** Shorthand for primary content. */
  // content: customPropTypes.contentShorthand,

  /** Formats content to be aligned horizontally. */
  horizontal: Boolean,

  /** Formatted to look like a pile of pages. */
  piled: Boolean,

  /** A segment group may be formatted to raise above the page. */
  raised: Boolean,

  /** A segment group can have different sizes. */
  size: String as PropType<Exclude<SIZES, 'medium'>>,

  /** Formatted to show it contains multiple pages. */
  stacked: Boolean,
}

export const segmentInlineProps = {
  /** An element type to render as (string or function). */
  // as: PropTypes.elementType,

  /** Primary content. */
  // children: PropTypes.node,

  /** Additional classes. */
  className: String,

  /** Shorthand for primary content. */
  // content: customPropTypes.contentShorthand,
}
