import { ALL_ICONS_IN_ALL_CONTEXTS, COLORS, SIZES } from '@/@types/sui';
import { PropType } from 'vue';

export const iconProps = {
  /** An element type to render as (string or function). */
  // as: PropTypes.elementType,

  /** Formatted to appear bordered. */
  bordered: { type: Boolean },

  /** Icon can formatted to appear circular. */
  circular: { type: Boolean },

  /** Additional classes. */
  className: { type: String },

  /** Color of the icon. */
  color: { type: String as PropType<COLORS> },

  /** Icons can display a smaller corner icon. */
  corner: { type: [Boolean, String] as PropType<boolean | 'top left' | 'top right' | 'bottom left' | 'bottom right'> },

  /** Show that the icon is inactive. */
  disabled: { type: Boolean },

  /** Fitted, without space to left or right of Icon. */
  fitted: { type: Boolean },

  /** Icon can be flipped. */
  flipped: { type: String as PropType<'horizontally' | 'vertically'> },

  /** Formatted to have its colors inverted for contrast. */
  inverted: { type: Boolean },

  /** Icon can be formatted as a link. */
  link: { type: Boolean },

  /** Icon can be used as a simple loader. */
  loading: { type: Boolean },

  /** Name of the icon. */
  name: { type: String as PropType<ALL_ICONS_IN_ALL_CONTEXTS> },

  /** Icon can rotated. */
  rotated: { type: String as PropType<'clockwise' | 'counterclockwise'> },

  /** Size of the icon. */
  size: { type: String as PropType<Exclude<SIZES, 'medium'>> },

  /** Icon can have an aria label. */
  'aria-hidden': { type: String },

  /** Icon can have an aria label. */
  'aria-label': { type: String },
} as const;

export const iconGroupProps = {
  /** An element type to render as (string or function). */
  // as: PropTypes.elementType,

  /** Primary content. */
  // children: PropTypes.node,

  /** Additional classes. */
  className: { type: String },

  /** Shorthand for primary content. */
  // content: customPropTypes.contentShorthand,

  /** Size of the icon group. */
  size: { type: String as PropType<Exclude<SIZES, 'medium'>> },
};
