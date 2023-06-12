<script lang="ts">
import { useModalsStore } from '@/stores/modals'
import { useUserStore } from '@/stores/user'
import { mapActions, mapState } from 'pinia'
export default {
  computed: {
    ...mapState(useModalsStore, ['formHasSubmitted'])
  },
  methods: {
    ...mapActions(useModalsStore, ['toggleModal']),
    ...mapActions(useUserStore, ['handelUser']),
    handleClick() {
      if (this.formHasSubmitted) this.handelUser()
      this.toggleModal()
    }
  }
}
</script>

<template>
  <section class="wrapper">
    <div @click="handleClick"></div>
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
@import '../../assets/styles/main.scss';
.wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  > div {
    width: 100%;
    height: 100%;
    background-color: rgba($primaryColor, 0.8);
  }
}
</style>
