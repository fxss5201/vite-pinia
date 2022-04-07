<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Hello Vue 3 + TypeScript + Vite</h1>
  <div>doubleCount: {{ counter.doubleCount }}</div>
  <div>doubleCountPlusOne: {{ counter.doubleCountPlusOne }}</div>
  <button @click="counter.$patch({ count: counter.count + 1 })">count: {{ counter.count }}</button>
  <button @click="counter.$reset()">reset</button>
  <div>otherCounter.countSum: {{ otherCounter.countSum }}</div>
  <button @click="otherCounter.increment">count: {{ otherCounter.count }}</button>
  <button @click="otherCounterDispose">otherCounterDispose</button>
  <div>counter.countOnAction</div>
  <button @click="countOnActionEvent">countOnAction</button>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useCounterStore, useOtherCounterStore } from './store'

const counter = useCounterStore()
function countOnActionEvent() {
  counter.countOnAction(10)
}
counter.$subscribe((mutation, state) => {
  // // import { MutationType } from 'pinia'
  // mutation.type // 'direct' | 'patch object' | 'patch function'
  // // same as cartStore.$id
  // mutation.storeId // 'cart'
  // // only available with mutation.type === 'patch object'
  // mutation.payload // patch object passed to cartStore.$patch()
  console.log(mutation)
})
const unsubscribe = counter.$onAction(
  ({
    name, // name of the action
    store, // store instance, same as `someStore`
    args, // array of parameters passed to the action
    after, // hook after the action returns or resolves
    onError, // hook if the action throws or rejects
  }) => {
    // a shared variable for this specific action call
    const startTime = Date.now()
    // this will trigger before an action on `store` is executed
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // this will trigger if the action succeeds and after it has fully run.
    // it waits for any returned promised
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // this will trigger if the action throws or returns a promise that rejects
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)
// unsubscribe()

const otherCounter = useOtherCounterStore()

function otherCounterDispose() {
  otherCounter.$dispose()
}
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
