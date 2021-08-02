<template>
  <img alt="Vue logo" src="https://vuejs.org/images/logo.svg">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld, { HelloProp } from './components/HelloWorld.vue';

export const HelloPropSample: HelloProp = {
  title: "Sample",
  caption: "Just a sample outside file definition"
}
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>
