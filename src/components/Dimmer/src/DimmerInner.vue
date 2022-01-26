<script setup lang="ts">
import { doesNodeContainClick, getUnhandledProps, useKeyOnly, useVerticalAlignProp } from '@/lib';
import clsx from 'clsx';
import _ from 'lodash';
import { onMounted, onUpdated, ref, watch } from 'vue';
import { dimmerInnerProps } from './Props';

const props = defineProps(dimmerInnerProps);
const containerRef = ref(null);
const contentRef = ref(null);

const { active, className, disabled, inverted, page, simple, verticalAlign } = props;
onMounted(() => {
  console.log(1, containerRef);

  toggleStyles(active);
});

watch(
  () => active,
  (newValue, oldValue) => {
    if (oldValue !== newValue) toggleStyles(newValue);
  }
);

const handleClick = (e: MouseEvent) => {
  const contentRef = contentRef;

  _.invoke(props, 'onClick', e, props);

  if (contentRef && contentRef !== e.target && doesNodeContainClick(contentRef, e)) {
    return;
  }

  _.invoke(props, 'onClickOutside', e, props);
};

const toggleStyles = (active: boolean) => {
  console.log('toggleStyles');

  console.log(2, containerRef);

  const containerRef = containerRef;

  if (!containerRef || !containerRef.style) return;
  if (active) {
    containerRef.style.setProperty('display', 'flex', 'important');
  } else {
    containerRef.style.removeProperty('display');
  }
};

const classes = clsx(
  'ui',
  useKeyOnly(active, 'active transition visible'),
  useKeyOnly(disabled, 'disabled'),
  useKeyOnly(inverted, 'inverted'),
  useKeyOnly(page, 'page'),
  useKeyOnly(simple, 'simple'),
  useVerticalAlignProp(verticalAlign),
  'dimmer',
  className
);
const rest = getUnhandledProps(dimmerInnerProps, props);

defineExpose({
  containerRef,
});
</script>
<template>
  <div ref="containerRef" v-bind="rest" :class="classes" @click="handleClick">
    <div class="content" ref="contentRef"><slot></slot></div>
  </div>
</template>
<style scoped></style>
