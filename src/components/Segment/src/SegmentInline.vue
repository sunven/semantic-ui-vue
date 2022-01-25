<script lang="ts" setup>
import { getUnhandledProps } from '@/lib';
import clsx from 'clsx';
import { segmentInlineProps } from './Props';

const props = defineProps(segmentInlineProps);
const { className } = props;
const classes = clsx('inline', className);
const rest = getUnhandledProps(segmentInlineProps, props);
</script>

<template>
  <div v-bind="rest" :class="classes">
    <slot></slot>
  </div>
</template>
