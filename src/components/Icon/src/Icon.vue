<template>
  <i v-bind="{ ...rest, ...ariaOptions }" :class="classes" @click="handleClick"></i>
</template>

<script lang="ts" setup>
import { isNil, useKeyOnly, useKeyOrValueAndKey, useValueAndKey, getUnhandledProps } from '@/lib';
import { iconProps } from './Props';
import clsx from 'clsx';

const props = defineProps(iconProps);

const getIconAriaOptions = () => {
  const ariaOptions: { [key: string]: string | undefined } = {};
  const { 'aria-label': ariaLabel, 'aria-hidden': ariaHidden } = props;

  if (isNil(ariaLabel)) {
    ariaOptions['aria-hidden'] = 'true';
  } else {
    ariaOptions['aria-label'] = ariaLabel;
  }

  if (!isNil(ariaHidden)) {
    ariaOptions['aria-hidden'] = ariaHidden;
  }

  return ariaOptions;
};

const rest = getUnhandledProps(iconProps, props);
const ariaOptions = getIconAriaOptions();

const { bordered, circular, className, color, corner, disabled, fitted, flipped, inverted, link, loading, name, rotated, size } = props;
const classes = clsx([
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
]);

const emit = defineEmits(['click']);
const handleClick = (e: MouseEvent) => {
  const { disabled } = props;
  if (disabled) {
    e.preventDefault();
    return;
  }
  emit('click', e);
};
</script>

<style lang="scss" scoped></style>
