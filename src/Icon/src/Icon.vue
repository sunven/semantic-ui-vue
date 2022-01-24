<template>
  <i v-bind="{ ...rest, ...ariaOptions }" :class="classes" @click="handleClick" />
</template>

<script lang="ts" setup>
import { useKeyOnly, useKeyOrValueAndKey, useValueAndKey } from '@/lib';
import type { IconProps } from './IconType';
interface IconProps1 extends IconProps {}
const props = withDefaults(defineProps<IconProps1>(), {});

const getIconAriaOptions = () => {
  const ariaOptions: { [key: string]: string } = {};
  const { 'aria-label': ariaLabel, 'aria-hidden': ariaHidden } = props;

  if (_.isNil(ariaLabel)) {
    ariaOptions['aria-hidden'] = 'true';
  } else {
    ariaOptions['aria-label'] = ariaLabel;
  }

  if (!_.isNil(ariaHidden)) {
    ariaOptions['aria-hidden'] = ariaHidden;
  }

  return ariaOptions;
};

const rest = getUnhandledProps(Icon, this.props);

const ariaOptions = getIconAriaOptions();
const { bordered, circular, className, color, corner, disabled, fitted, flipped, inverted, link, loading, name, rotated, size } = props;
const classes = [
  color,
  name,
  size,
  useKeyOnly(bordered, 'bordered'),
  useKeyOnly(circular, 'circular'),
  useKeyOnly(disabled, 'disabled'),
  useKeyOnly(fitted, 'fitted'),
  useKeyOnly(inverted, 'inverted'),
  useKeyOnly(link, 'link'),
  useKeyOnly(loading, 'loading'),
  useKeyOrValueAndKey(corner, 'corner'),
  useValueAndKey(flipped, 'flipped'),
  useValueAndKey(rotated, 'rotated'),
  'icon',
  className,
];

const emit = defineEmits(['click']);
const handleClick = e => {
  const { disabled } = props;

  if (disabled) {
    e.preventDefault();
    return;
  }

  emit('click');
};
</script>

<style lang="scss" scoped></style>
