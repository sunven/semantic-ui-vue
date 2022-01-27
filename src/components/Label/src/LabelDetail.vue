<script lang="ts" setup>
import clsx from 'clsx';
import { computed } from 'vue';
import { labelDetailProps } from './Props';
const props = defineProps(labelDetailProps);
const classes = computed(() => clsx('detail', props.className));
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
