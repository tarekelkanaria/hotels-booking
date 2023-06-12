<script lang="ts">
import { RouterLink } from 'vue-router'
import { useBookingStore } from '@/stores/booking'
import { mapState } from 'pinia'
// @ts-ignore
import CartOutline from 'vue-material-design-icons/CartOutline.vue'
export default {
  computed: {
    ...mapState(useBookingStore, ['bookedHotels'])
  },
  components: {
    CartOutline,
    RouterLink
  }
}
</script>

<template>
  <header class="app-header">
    <nav class="top-nav container">
      <RouterLink to="/">
        <h1 class="logo">Hotels Booking</h1>
      </RouterLink>
      <RouterLink to="/cart">
        <div class="cart">
          <div class="booked-count">
            {{ bookedHotels.length }}
          </div>
          <CartOutline :size="48" fillColor="#f59e0b" />
        </div>
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import '../../assets/styles/main.scss';

.app-header {
  background-color: $primaryColor;
  padding-block: 0.5rem;
}
.top-nav {
  @extend %flex_between;
  @include media-query($smScreen) {
    & {
      flex-direction: column;
    }
  }
  .logo {
    font: {
      family: $headingFont;
      weight: 800;
      size: 3.2rem;
    }
    color: $secondaryColor;
    letter-spacing: -0.2rem;
    word-spacing: -0.6rem;
    text-align: center;
  }
  .cart {
    position: relative;
    padding-top: 1rem;
    .booked-count {
      @extend %flex_center;
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      top: 1.5rem;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: #f43f5e;
      color: $whiteColor;
    }
  }
  .router-link-active {
    border-bottom: 2px solid $secondaryColor;
  }
}
</style>
