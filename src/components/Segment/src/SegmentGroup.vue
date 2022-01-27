<script lang="ts" setup>
import { useKeyOnly } from '@/lib'
import clsx from 'clsx'
import { computed } from 'vue'
import { segmentGroupProps } from './Props'
const props = defineProps(segmentGroupProps)

const classes = computed(() =>
  clsx(
    'ui',
    props.size,
    useKeyOnly(props.compact, 'compact'),
    useKeyOnly(props.horizontal, 'horizontal'),
    useKeyOnly(props.piled, 'piled'),
    useKeyOnly(props.raised, 'raised'),
    useKeyOnly(props.stacked, 'stacked'),
    'segments',
    props.className
  )
)
</script>
<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
