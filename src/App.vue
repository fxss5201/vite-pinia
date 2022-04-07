<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Hello Vue 3 + TypeScript + Vite</h1>
  <div>doubleCount: {{ counter.doubleCount }}</div>
  <div>doubleCountPlusOne: {{ counter.doubleCountPlusOne }}</div>
  <button @click="counter.increment">count: {{ counter.count }}</button>
  <button @click="counter.$reset()">reset</button>
  <div>otherCounter.countSum: {{ otherCounter.countSum }}</div>
  <button @click="otherCounter.increment">count: {{ otherCounter.count }}</button>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useCounterStore, useOtherCounterStore } from './store'

const counter = useCounterStore()
const otherCounter = useOtherCounterStore()
</script>

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
