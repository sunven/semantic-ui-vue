<script lang="ts" setup>
import { getUnhandledProps, useKeyOnly } from '@/lib';
import clsx from 'clsx';
import { dimmerDimmableProps } from './Props';

const props = defineProps(dimmerDimmableProps);
const { blurring, className, dimmed } = props;

const classes = clsx(useKeyOnly(blurring, 'blurring'), useKeyOnly(dimmed, 'dimmed'), 'dimmable', className);
const rest = getUnhandledProps(dimmerDimmableProps, props);
</script>
<template>
  <div v-bind="rest" :class="classes">
    <slot></slot>
  </div>
</template>
