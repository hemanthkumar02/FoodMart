<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "../stores/counterStore";

export default defineComponent({
  setup() {
    const counterStore = useCounterStore();
    return { counterStore };
  },
});
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <p>Counter: {{ counterStore.count }}</p>
    <button @click="counterStore.increment">Increment</button>
    <button @click="counterStore.decrement">Decrement</button>
  </div>
</template>
