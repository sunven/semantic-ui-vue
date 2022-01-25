<script setup lang="ts">
import { defineProps, computed, defineEmits } from 'vue';
const props = defineProps({
  type: String,
  icon: String,
  size: String,
});

const emit = defineEmits(['click']);
const onClick = () => {
  emit('click');
};

const defaultClassName = ['ui', 'button'];

const className = computed(() => {
  let name = [...defaultClassName];
  if (props.type) {
    name.push(props.type);
  }
  if (props.icon) {
    name.push('icon');
  }
  if (props.size) {
    name.push(props.size);
  }
  return name;
});
</script>

<template>
  <button :class="className" @click="onClick">
    <i v-if="icon" class="icon" :class="icon"></i>
    <slot></slot>
  </button>
</template>

<style scoped></style>
