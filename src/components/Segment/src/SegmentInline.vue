<script lang="ts" setup>
import clsx from 'clsx'
import { computed } from 'vue'
import { segmentInlineProps } from './Props'

const props = defineProps(segmentInlineProps)
const classes = computed(() => clsx('inline', props.className))
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
