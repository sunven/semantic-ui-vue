import { h, defineComponent, computed } from 'vue';
import clsx from 'clsx';
import { labelProps } from './Props';
import { createComp, useKeyOnly, useKeyOrValueAndKey, useValueAndKey } from '@/lib';
import { SIcon } from '../../Icon';
import { SImage } from '../../Image';
import { SLabelDetail } from '../';
import _ from 'lodash';

const Label = defineComponent({
  // components: { SIcon },
  props: labelProps,
  setup(props) {
    const pointingClass = computed(
      () =>
        (props.pointing === true && 'pointing') ||
        ((props.pointing === 'left' || props.pointing === 'right') && `${props.pointing} pointing`) ||
        ((props.pointing === 'above' || props.pointing === 'below') && `pointing ${props.pointing}`)
    );

    const classes = clsx(
      'ui',
      props.color,
      pointingClass,
      props.size,
      useKeyOnly(props.active, 'active'),
      useKeyOnly(props.basic, 'basic'),
      useKeyOnly(props.circular, 'circular'),
      useKeyOnly(props.empty, 'empty'),
      useKeyOnly(props.floating, 'floating'),
      useKeyOnly(props.horizontal, 'horizontal'),
      useKeyOnly(props.image === true, 'image'),
      useKeyOnly(props.prompt, 'prompt'),
      useKeyOnly(props.tag, 'tag'),
      useKeyOrValueAndKey(props.corner, 'corner'),
      useKeyOrValueAndKey(props.ribbon, 'ribbon'),
      useValueAndKey(props.attached, 'attached'),
      'label',
      props.className
    );

    const handleClick = (e: MouseEvent) => {
      const { onClick } = props;
      if (onClick) onClick(e, props);
    };

    const handleIconOnClick = (predefinedProps: any) => (e: MouseEvent) => {
      _.invoke(predefinedProps, 'onClick', e);
      _.invoke(props, 'onRemove', e, props);
    };

    const createIcon = (icon: any) => {
      if (typeof icon === 'string') {
        return createComp(SIcon, icon, (val: any) => ({ name: val, onClick: handleIconOnClick(icon) }));
      }
      if (typeof icon === 'object') {
        icon.onClick = handleIconOnClick(icon);
        return createComp(SIcon, icon);
      }
    };

    return { classes, handleClick, createIcon };
  },
  render() {
    const { $slots, classes, removeIcon, icon, image, onRemove, detail, createIcon } = this;
    if (_.isNil($slots.default)) {
      return <div class={classes} onClick={this.handleClick}></div>;
    }
    const removeIconShorthand = _.isNil(removeIcon) ? 'delete' : removeIcon;

    return (
      <div class={classes} onClick={this.handleClick}>
        {createComp(SIcon, icon, (val: any) => ({ name: val }))}
        {createComp(SImage, image, (val: any) => ({ src: val }))}
        {$slots.default()}
        {createComp(SLabelDetail, detail)}
        {onRemove && createIcon(removeIconShorthand)}
      </div>
    );
  },
});

export default Label;
