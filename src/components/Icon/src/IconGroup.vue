<template>
  <i v-bind="rest" :class="classes">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { getUnhandledProps } from '@/lib';
import { iconGroupProps } from './Props';
import clsx from 'clsx';

const props = defineProps(iconGroupProps);

const { className, size } = props;
const classes = clsx(size, 'icons', className);
const rest = getUnhandledProps(iconGroupProps, props);
</script>

<style lang="scss" scoped></style>
