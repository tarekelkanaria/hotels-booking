<script lang="ts">
import { useUserStore } from '@/stores/user'
import { useModalsStore } from '@/stores/modals'
import { mapState, mapActions } from 'pinia'
import MainButton from '../UI/MainButton.vue'
// @ts-ignore
import WindowClose from 'vue-material-design-icons/WindowClose.vue'

export default {
  computed: {
    ...mapState(useUserStore, ['userName'])
  },
  methods: {
    ...mapActions(useModalsStore, ['toggleModal']),
    ...mapActions(useUserStore, ['handelUser']),
    handleBooking() {
      this.handelUser()
      this.toggleModal()
    }
  },
  components: { WindowClose, MainButton }
}
</script>

<template>
  <div class="message-wrapper">
    <WindowClose fillColor="#f43f5e" :size="48" class="close-modal" @click="handleBooking" />
    <h2>
      Thank you <span>{{ userName.toUpperCase() }}</span> for booking with us
    </h2>
    <MainButton @click="handleBooking">Book Again</MainButton>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/styles/main.scss';
.message-wrapper {
  @extend %modal_window;
  @extend %modal_message;
}
</style>
