import { ClickEvent } from '@/@types/common';
import { PropType } from 'vue';

export const dimmerProps = {
  /** An active dimmer will dim its parent container. */
  active: Boolean,

  /** A dimmer can be formatted to be fixed to the page. */
  page: Boolean,
};

export const dimmerInnerProps = {
  /** An element type to render as (string or function). */
  // as: PropTypes.elementType,

  /** An active dimmer will dim its parent container. */
  active: Boolean,

  /** Primary content. */
  // children: PropTypes.node,

  /** Additional classes. */
  className: String,

  /** Shorthand for primary content. */
  // content: customPropTypes.contentShorthand,

  /** A disabled dimmer cannot be activated */
  disabled: Boolean,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: Function as PropType<ClickEvent>,

  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside: Function as PropType<ClickEvent>,

  /** A dimmer can be formatted to have its colors inverted. */
  inverted: Boolean,

  /** A dimmer can be formatted to be fixed to the page. */
  page: Boolean,

  /** A dimmer can be controlled with simple prop. */
  simple: Boolean,

  /** A dimmer can have its content top or bottom aligned. */
  verticalAlign: String as PropType<'bottom' | 'top'>,
};

export const dimmerDimmableProps = {
  /** An element type to render as (string or function). */
  // as: PropTypes.elementType,

  /** A dimmable element can blur its contents. */
  blurring: Boolean,

  /** Primary content. */
  // children: PropTypes.node,

  /** Additional classes. */
  className: String,

  /** Shorthand for primary content. */
  // content: customPropTypes.contentShorthand,

  /** Controls whether or not the dim is displayed. */
  dimmed: Boolean,
};
