import { useKeyOnly, useKeyOrValueAndKey, useValueAndKey, useVerticalAlignProp, partitionHTMLProps, htmlImageProps, createComp } from '@/lib';
import clsx from 'clsx';
import { h, defineComponent, computed } from 'vue';
import { SLabel } from '../../Label';
import { imageProps } from './Props';
import { SDimmer } from '../../Dimmer';
import _ from 'lodash';
export default defineComponent({
  props: imageProps,
  setup(props) {
    const classes = computed(() =>
      clsx(
        useKeyOnly(props.ui, 'ui'),
        props.size,
        useKeyOnly(props.avatar, 'avatar'),
        useKeyOnly(props.bordered, 'bordered'),
        useKeyOnly(props.circular, 'circular'),
        useKeyOnly(props.centered, 'centered'),
        useKeyOnly(props.disabled, 'disabled'),
        useKeyOnly(props.fluid, 'fluid'),
        useKeyOnly(props.hidden, 'hidden'),
        useKeyOnly(props.inline, 'inline'),
        useKeyOnly(props.rounded, 'rounded'),
        useKeyOrValueAndKey(props.spaced, 'spaced'),
        useValueAndKey(props.floated, 'floated'),
        useVerticalAlignProp(props.verticalAlign),
        'image',
        props.className
      )
    );
    const [imgTagProps, rootProps] = partitionHTMLProps(props, { htmlProps: htmlImageProps });

    return { rootProps, imgTagProps, classes };
  },
  render() {
    const { dimmer, href, label, wrapped, $slots, rootProps, imgTagProps, classes } = this;

    if (_.isNil(dimmer) && _.isNil(label) && _.isNil(wrapped) && _.isNil($slots.default)) {
      return <img {...rootProps} {...imgTagProps} class={classes} />;
    }
    return (
      <a {...rootProps} class={classes} href={href}>
        {createComp(SDimmer, dimmer)}
        {createComp(SLabel, label)}
        <img {...imgTagProps} />
      </a>
    );
  },
});
