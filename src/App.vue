<script lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader/AppHeader.vue'
export default { components: { AppHeader, RouterView } }
</script>

<template>
  <AppHeader />
  <RouterView v-slot="{ Component }">
    <Transition name="slide" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.1s, opacity 0.1s;
}
.slide-enter-from,
.slide-enter-to {
  transform: translateX(-30%);
  opacity: 0;
}
</style>
