<script lang="ts" setup>
import { useKeyOnly, useKeyOrValueAndKey, useTextAlignProp, useValueAndKey } from '@/lib'
import clsx from 'clsx'
import { computed } from 'vue'
import { segmentProps } from './Props'
const props = defineProps(segmentProps)

const classes = computed(() =>
  clsx(
    'ui',
    props.color,
    props.size,
    useKeyOnly(props.basic, 'basic'),
    useKeyOnly(props.circular, 'circular'),
    useKeyOnly(props.clearing, 'clearing'),
    useKeyOnly(props.compact, 'compact'),
    useKeyOnly(props.disabled, 'disabled'),
    useKeyOnly(props.inverted, 'inverted'),
    useKeyOnly(props.loading, 'loading'),
    useKeyOnly(props.placeholder, 'placeholder'),
    useKeyOnly(props.piled, 'piled'),
    useKeyOnly(props.raised, 'raised'),
    useKeyOnly(props.secondary, 'secondary'),
    useKeyOnly(props.stacked, 'stacked'),
    useKeyOnly(props.tertiary, 'tertiary'),
    useKeyOnly(props.vertical, 'vertical'),
    useKeyOrValueAndKey(props.attached, 'attached'),
    useKeyOrValueAndKey(props.padded, 'padded'),
    useTextAlignProp(props.textAlign),
    useValueAndKey(props.floated, 'floated'),
    'segment',
    props.className
  )
)
</script>
<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
