<script lang="ts" setup>
import { labelProps } from './Props';

defineProps(labelProps);
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>
