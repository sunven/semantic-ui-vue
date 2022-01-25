<script lang="ts" setup>
import { useKeyOnly, getUnhandledProps } from '@/lib';
import clsx from 'clsx';
import { segmentGroupProps } from './Props';
const props = defineProps(segmentGroupProps);

const { className, compact, horizontal, piled, raised, size, stacked } = props;

const classes = clsx(
  'ui',
  size,
  useKeyOnly(compact, 'compact'),
  useKeyOnly(horizontal, 'horizontal'),
  useKeyOnly(piled, 'piled'),
  useKeyOnly(raised, 'raised'),
  useKeyOnly(stacked, 'stacked'),
  'segments',
  className
);
const rest = getUnhandledProps(segmentGroupProps, props);
</script>
<template>
  <div v-bind="rest" :class="classes">
    <slot></slot>
  </div>
</template>
