import { h, defineComponent, DefineComponent } from 'vue';
import clsx from 'clsx';
import { labelProps } from './Props';
import { useKeyOnly, useKeyOrValueAndKey, useValueAndKey, getUnhandledProps, isNil } from '@/lib';
import { SIcon } from '../../Icon';
import { SImage } from '../../Image';
// const props = defineProps(labelProps);

const Label = defineComponent({
  components: { SIcon },
  props: labelProps,
  setup(props) {
    const {
      active,
      attached,
      basic,
      children,
      circular,
      className,
      color,
      content,
      corner,
      detail,
      empty,
      floating,
      horizontal,
      icon,
      image,
      onRemove,
      pointing,
      prompt,
      removeIcon,
      ribbon,
      size,
      tag,
    } = props;
    const pointingClass =
      (pointing === true && 'pointing') ||
      ((pointing === 'left' || pointing === 'right') && `${pointing} pointing`) ||
      ((pointing === 'above' || pointing === 'below') && `pointing ${pointing}`);

    const classes = clsx(
      'ui',
      color,
      pointingClass,
      size,
      useKeyOnly(active, 'active'),
      useKeyOnly(basic, 'basic'),
      useKeyOnly(circular, 'circular'),
      useKeyOnly(empty, 'empty'),
      useKeyOnly(floating, 'floating'),
      useKeyOnly(horizontal, 'horizontal'),
      useKeyOnly(image === true, 'image'),
      useKeyOnly(prompt, 'prompt'),
      useKeyOnly(tag, 'tag'),
      useKeyOrValueAndKey(corner, 'corner'),
      useKeyOrValueAndKey(ribbon, 'ribbon'),
      useValueAndKey(attached, 'attached'),
      'label',
      className
    );
    const rest = getUnhandledProps(labelProps, props);

    const handleClick = (e: MouseEvent) => {
      const { onClick } = props;
      if (onClick) onClick(e, props);
    };

    const handleIconOverrides = predefinedProps => ({
      onClick: e => {
        _.invoke(predefinedProps, 'onClick', e);
        _.invoke(this.props, 'onRemove', e, this.props);
      },
    });
    return { classes, handleClick, rest };
  },
  render() {
    const { $slots, classes, rest, removeIcon, icon,image } = this;
    if (!isNil($slots.default)) {
      return <div class={classes} {...rest} onClick={this.handleClick}></div>;
    }
    const removeIconShorthand = isNil(removeIcon) ? 'delete' : removeIcon;

    return (
      <div class={classes} onClick={this.handleClick} {...rest}>
        {h(SIcon, typeof icon === 'string' ? { name: icon } : icon)}
        {h(SImage, typeof image === 'string' ? { src: image } : image)}
        {/* {typeof image !== 'boolean' && Image.create(image, { autoGenerateKey: false })} */}
        <slot></slot>
        {LabelDetail.create(detail, { autoGenerateKey: false })}
        {onRemove &&
          Icon.create(removeIconShorthand, {
            autoGenerateKey: false,
            overrideProps: this.handleIconOverrides,
          })} */}
      </div>
    );
  },
});

export default Label;
