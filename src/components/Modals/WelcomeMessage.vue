<script lang="ts">
import { useBookingStore } from '@/stores/booking'
import { useUserStore } from '@/stores/user'
import { useModalsStore } from '@/stores/modals'
import { mapState, mapActions } from 'pinia'
import MainButton from '../UI/MainButton.vue'
// @ts-ignore
import WindowClose from 'vue-material-design-icons/WindowClose.vue'

export default {
  computed: {
    ...mapState(useBookingStore, ['selectedHotel']),
    ...mapState(useUserStore, ['userName'])
  },
  methods: {
    ...mapActions(useModalsStore, ['toggleModal']),
    ...mapActions(useBookingStore, ['bookingHotel']),
    addHotel() {
      this.bookingHotel(this.selectedHotel)
      this.$emit('booking-again')
    }
  },
  emits: ['booking-again'],
  components: { WindowClose, MainButton }
}
</script>

<template>
  <div class="message-wrapper">
    <WindowClose fillColor="#f43f5e" :size="48" class="close-modal" @click="toggleModal" />
    <h2>
      Welcome Again <span>{{ userName.toUpperCase() }}</span>
    </h2>
    <p>Want to book {{ selectedHotel.name }}</p>
    <div>
      <MainButton @click="addHotel()">Book Now</MainButton>
      <MainButton @click="toggleModal" class="cancel">Cancel</MainButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/styles/main.scss';
.message-wrapper {
  @extend %modal_window;
  @extend %modal_message;
  > div {
    @extend %input_wrapper;
  }
  .cancel {
    @extend %cancel_btn;
  }
}
</style>
