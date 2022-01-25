<script lang="ts" setup>
import { useKeyOnly, useKeyOrValueAndKey, useTextAlignProp, useValueAndKey, getUnhandledProps } from '@/lib';
import clsx from 'clsx';
import { segmentProps } from './Props';
const props = defineProps(segmentProps);
const {
  attached,
  basic,
  circular,
  className,
  clearing,
  color,
  compact,
  disabled,
  floated,
  inverted,
  loading,
  placeholder,
  padded,
  piled,
  raised,
  secondary,
  size,
  stacked,
  tertiary,
  textAlign,
  vertical,
} = props;

const classes = clsx(
  'ui',
  color,
  size,
  useKeyOnly(basic, 'basic'),
  useKeyOnly(circular, 'circular'),
  useKeyOnly(clearing, 'clearing'),
  useKeyOnly(compact, 'compact'),
  useKeyOnly(disabled, 'disabled'),
  useKeyOnly(inverted, 'inverted'),
  useKeyOnly(loading, 'loading'),
  useKeyOnly(placeholder, 'placeholder'),
  useKeyOnly(piled, 'piled'),
  useKeyOnly(raised, 'raised'),
  useKeyOnly(secondary, 'secondary'),
  useKeyOnly(stacked, 'stacked'),
  useKeyOnly(tertiary, 'tertiary'),
  useKeyOnly(vertical, 'vertical'),
  useKeyOrValueAndKey(attached, 'attached'),
  useKeyOrValueAndKey(padded, 'padded'),
  useTextAlignProp(textAlign),
  useValueAndKey(floated, 'floated'),
  'segment',
  className
);
const rest = getUnhandledProps(segmentProps, props);
</script>
<template>
  <div :class="classes" v-bind="rest">
    <slot></slot>
  </div>
</template>
