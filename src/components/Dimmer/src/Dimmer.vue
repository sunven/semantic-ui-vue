<script lang="ts" setup>
import { getUnhandledProps } from '@/lib';
import { dimmerProps } from './Props';
import { SDimmerInner } from '../';

const props = defineProps(dimmerProps);
const { active, page } = props;
const rest = getUnhandledProps(dimmerProps, props);
</script>

<template>
  <div v-if="page"></div>
  <SDimmerInner v-else v-bind="rest" :active="active" :page="page"></SDimmerInner>
</template>

<style lang="scss" scoped></style>
