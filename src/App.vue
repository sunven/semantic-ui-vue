<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { SButton } from './components/Button';
import { SIcon, SIconGroup } from './components/Icon';
import { SSegment } from './components/Segment';
import { SLabel } from './components/Label';
import { SDimmer, SDimmerDimmable } from './components/Dimmer';
const onClickOutside = function (a) {
  console.log('aaa', a);
};
</script>

<template>
  <s-button type="basic" size="big" icon="cloud">111</s-button>
  111
  <s-icon name="als" size="big"></s-icon>
  <s-icon-group size="huge">
    <s-icon size="big" name="circle outline" />
    <s-icon name="user" />
  </s-icon-group>
  <s-segment></s-segment>
  <!-- <s-label icon="home"></s-label> -->
  <SSegment>
    <s-dimmer active :onClickOutside="onClickOutside">
      <p>1111</p>
      <p>222</p>
    </s-dimmer>
  </SSegment>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
