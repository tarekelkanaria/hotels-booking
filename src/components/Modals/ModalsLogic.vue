<script lang="ts">
import { useModalsStore } from '@/stores/modals'
import { useUserStore } from '@/stores/user'
import { mapState } from 'pinia'
import OverlayWrapper from '../UI/OverlayWrapper.vue'
import FormModal from './FormModal.vue'
import WelcomeMessage from './WelcomeMessage.vue'
import ThanksMessage from './ThanksMessage.vue'

export default {
  data() {
    return {
      bookingAgain: false
    }
  },
  computed: {
    ...mapState(useModalsStore, ['formHasSubmitted']),
    ...mapState(useUserStore, ['userExisted'])
  },
  methods: {
    handleBookingAgain() {
      if (this.userExisted) this.bookingAgain = true
    }
  },
  components: { OverlayWrapper, FormModal, ThanksMessage, WelcomeMessage }
}
</script>

<template>
  <OverlayWrapper>
    <Transition name="from-right" mode="out-in">
      <FormModal v-if="!formHasSubmitted && !userExisted" />
      <ThanksMessage v-else-if="formHasSubmitted && !userExisted" />
      <WelcomeMessage
        v-else-if="!bookingAgain && userExisted"
        @booking-again="handleBookingAgain"
      />
      <ThanksMessage v-else />
    </Transition>
  </OverlayWrapper>
</template>

<style scoped lang="scss">
.from-right-enter-active,
.from-right-leave-active {
  transition: transform 0.4s cubic-bezier(0.47, 0, 0.745, 0.715);
}

.from-right-enter-from,
.from-right-leave-to {
  transform: translateX(100%);
}
</style>
