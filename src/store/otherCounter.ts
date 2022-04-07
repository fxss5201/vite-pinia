import { defineStore } from 'pinia'
import { useCounterStore } from './counter'

export const useOtherCounterStore = defineStore('otherCounter', {
  state: () => {
    return {
      count: 10
    }
  },
  getters: {
    countSum(state) {
      const counter = useCounterStore()
      return state.count + counter.doubleCount
    }
  },
  actions: {
    increment() {
      this.count++
    }
  }
})