import { ALL_ICONS_IN_ALL_CONTEXTS, COLORS, SIZES } from '@/@types/sui';

export interface IconProps {
  /** An element type to render as (string or function). */
  // as: PropTypes.elementType,

  /** Formatted to appear bordered. */
  bordered: boolean;

  /** Icon can formatted to appear circular. */
  circular: boolean;

  /** Additional classes. */
  className: string;

  /** Color of the icon. */
  color: COLORS;

  /** Icons can display a smaller corner icon. */
  corner: boolean | 'top left' | 'top right' | 'bottom left' | 'bottom right';

  /** Show that the icon is inactive. */
  disabled: boolean;

  /** Fitted, without space to left or right of Icon. */
  fitted: boolean;

  /** Icon can be flipped. */
  flipped: 'horizontally' | 'vertically';

  /** Formatted to have its colors inverted for contrast. */
  inverted: boolean;

  /** Icon can be formatted as a link. */
  link: boolean;

  /** Icon can be used as a simple loader. */
  loading: boolean;

  /** Name of the icon. */
  name: ALL_ICONS_IN_ALL_CONTEXTS;

  /** Icon can rotated. */
  rotated: ['clockwise', 'counterclockwise'];

  /** Size of the icon. */
  size: Exclude<SIZES, 'medium'>;

  /** Icon can have an aria label. */
  'aria-hidden': string;

  /** Icon can have an aria label. */
  'aria-label': string;
}
