<script lang="ts" setup>
import { isNil, useKeyOnly, useKeyOrValueAndKey, useValueAndKey, getUnhandledProps } from '@/lib'
import { iconProps } from './Props'
import clsx from 'clsx'
import { computed } from 'vue'

const props = defineProps(iconProps)

const getIconAriaOptions = () => {
  const ariaOptions: { [key: string]: string | undefined } = {}
  const { 'aria-label': ariaLabel, 'aria-hidden': ariaHidden } = props

  if (isNil(ariaLabel)) {
    ariaOptions['aria-hidden'] = 'true'
  } else {
    ariaOptions['aria-label'] = ariaLabel
  }

  if (!isNil(ariaHidden)) {
    ariaOptions['aria-hidden'] = ariaHidden
  }

  return ariaOptions
}

const rest = getUnhandledProps(iconProps, props)
const ariaOptions = getIconAriaOptions()

const classes = computed(() =>
  clsx([
    props.color,
    props.name,
    props.size,
    useKeyOnly(props.bordered, 'bordered'),
    useKeyOnly(props.circular, 'circular'),
    useKeyOnly(props.disabled, 'disabled'),
    useKeyOnly(props.fitted, 'fitted'),
    useKeyOnly(props.inverted, 'inverted'),
    useKeyOnly(props.link, 'link'),
    useKeyOnly(props.loading, 'loading'),
    useKeyOrValueAndKey(props.corner, 'corner'),
    useValueAndKey(props.flipped, 'flipped'),
    useValueAndKey(props.rotated, 'rotated'),
    'icon',
    props.className,
  ])
)

const emit = defineEmits(['click'])
const handleClick = (e: MouseEvent) => {
  const { disabled } = props
  if (disabled) {
    e.preventDefault()
    return
  }
  emit('click', e)
}
</script>

<template>
  <i v-bind="{ ...rest, ...ariaOptions }" :class="classes" @click="handleClick"></i>
</template>

<style lang="scss" scoped></style>
