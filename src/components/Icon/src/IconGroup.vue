<template>
  <i :class="classes">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { iconGroupProps } from './Props'
import clsx from 'clsx'
import { computed } from 'vue'

const props = defineProps(iconGroupProps)

const classes = computed(() => clsx(props.size, 'icons', props.className))
</script>

<style lang="scss" scoped></style>
