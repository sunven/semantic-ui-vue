import {
  useKeyOnly,
  useKeyOrValueAndKey,
  useValueAndKey,
  useVerticalAlignProp,
  getUnhandledProps,
  isNil,
  partitionHTMLProps,
  htmlImageProps,
  createComp,
} from '@/lib';
import clsx from 'clsx';
import { h, defineComponent } from 'vue';
import { SLabel } from '../../Label';
import { imageProps } from './Props';
import { SDimmer } from '../../Dimmer';
export default defineComponent({
  props: imageProps,
  setup(props) {
    const {
      avatar,
      bordered,
      centered,
      circular,
      className,
      dimmer,
      disabled,
      floated,
      fluid,
      hidden,
      href,
      inline,
      label,
      rounded,
      size,
      spaced,
      verticalAlign,
      wrapped,
      ui,
    } = props;

    const classes = clsx(
      useKeyOnly(ui, 'ui'),
      size,
      useKeyOnly(avatar, 'avatar'),
      useKeyOnly(bordered, 'bordered'),
      useKeyOnly(circular, 'circular'),
      useKeyOnly(centered, 'centered'),
      useKeyOnly(disabled, 'disabled'),
      useKeyOnly(fluid, 'fluid'),
      useKeyOnly(hidden, 'hidden'),
      useKeyOnly(inline, 'inline'),
      useKeyOnly(rounded, 'rounded'),
      useKeyOrValueAndKey(spaced, 'spaced'),
      useValueAndKey(floated, 'floated'),
      useVerticalAlignProp(verticalAlign),
      'image',
      className
    );
    const rest = getUnhandledProps(Image, props);
    const [imgTagProps, rootProps] = partitionHTMLProps(rest, { htmlProps: htmlImageProps });

    return { rootProps, imgTagProps, classes };
  },
  render() {
    const { dimmer, href, label, wrapped, $slots, rootProps, imgTagProps, classes } = this;

    if (isNil(dimmer) && isNil(label) && isNil(wrapped) && isNil($slots.default)) {
      return <img {...rootProps} {...imgTagProps} class={classes} />;
    }
    return (
      <div {...rootProps} class={classes} href={href}>
        {createComp(Dimmer, dimmer)}
        {/* {Dimmer.create(dimmer, { autoGenerateKey: false })} */}
        {typeof label === 'string' ? h(SLabel, null, label) : h(SLabel, label)}
        <img {...imgTagProps} />
      </div>
    );
  },
});
