<script lang="ts" setup>
import { useKeyOnly } from '@/lib';
import clsx from 'clsx';
import { computed } from 'vue';
import { labelGroupProps } from './Props';

const props = defineProps(labelGroupProps);

const classes = computed(() =>
  clsx('ui', props.color, props.size, useKeyOnly(props.circular, 'circular'), useKeyOnly(props.tag, 'tag'), 'labels', props.className)
);
</script>
<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
