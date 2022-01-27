<script setup lang="ts">
import { doesNodeContainClick, useKeyOnly, useVerticalAlignProp } from '@/lib';
import clsx from 'clsx';
import _ from 'lodash';
import { onMounted, ref, watch, computed } from 'vue';
import { dimmerInnerProps } from './Props';

const props = defineProps(dimmerInnerProps);

const containerRef = ref<HTMLElement>();
const contentRef = ref<HTMLElement>();

onMounted(() => {
  toggleStyles(props.active);
});

watch(
  () => props.active,
  (newValue, oldValue) => {
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

const classes = computed(() => {
  return clsx(
    'ui',
    useKeyOnly(props.active, 'active transition visible'),
    useKeyOnly(props.disabled, 'disabled'),
    useKeyOnly(props.inverted, 'inverted'),
    useKeyOnly(props.page, 'page'),
    useKeyOnly(props.simple, 'simple'),
    useVerticalAlignProp(props.verticalAlign),
    'dimmer',
    props.className
  );
});
</script>
<template>
  <div ref="containerRef" :class="classes" @click="handleClick">
    <div class="content" ref="contentRef"><slot></slot></div>
  </div>
</template>
<style scoped></style>
