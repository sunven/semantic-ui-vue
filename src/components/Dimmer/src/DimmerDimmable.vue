<script lang="ts" setup>
import { useKeyOnly } from '@/lib'
import clsx from 'clsx'
import { dimmerDimmableProps } from './Props'
import { computed } from 'vue'

const props = defineProps(dimmerDimmableProps)

const classes = computed(() => clsx(useKeyOnly(props.blurring, 'blurring'), useKeyOnly(props.dimmed, 'dimmed'), 'dimmable', props.className))
</script>
<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
