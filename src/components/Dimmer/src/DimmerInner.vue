<script setup lang="ts">
import { doesNodeContainClick, getUnhandledProps, useKeyOnly, useVerticalAlignProp } from '@/lib';
import clsx from 'clsx';
import _ from 'lodash';
import { onMounted, ref, watch, useAttrs } from 'vue';
import { dimmerInnerProps } from './Props';

const props = defineProps(dimmerInnerProps);
const containerRef = ref<HTMLElement>();
const contentRef = ref<HTMLElement>();

let { active, className, disabled, inverted, page, simple, verticalAlign, onClickOutside } = props;
onMounted(() => {
  toggleStyles(active);
  console.log('onClickOutside', onClickOutside);
  onClickOutside('a');
  // $emit('onClickOutside', an);
});

watch(
  () => active,
  (newValue, oldValue) => {
    console.log(1);

    if (oldValue !== newValue) toggleStyles(newValue);
  }
);

const handleClick = (e: MouseEvent) => {
  const dom = contentRef.value;

  _.invoke(props, 'onClick', e, props);
  if (dom && dom !== e.target && doesNodeContainClick(dom, e)) {
    return;
  }

  _.invoke(props, 'onClickOutside', e, props);
};

const toggleStyles = (active: boolean) => {
  const dom = containerRef.value;
  if (!dom || !dom.style) return;
  if (active) {
    dom.style.setProperty('display', 'flex', 'important');
  } else {
    dom.style.removeProperty('display');
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
</script>
<template>
  <div ref="containerRef" v-bind="rest" :class="classes" @click="handleClick">
    <div class="content" ref="contentRef"><slot></slot></div>
  </div>
</template>
<style scoped></style>
