<script lang="ts">
import { useBookingStore } from '../../stores/booking'
import { useModalsStore } from '../../stores/modals'
import { mapState, mapActions } from 'pinia'
import type { HotelItemData } from '../types/types'
import MainButton from '../UI/MainButton.vue'
import RatingStars from '../UI/RatingStars.vue'
// @ts-ignore
import CheckBold from 'vue-material-design-icons/CheckBold.vue'

export default {
  computed: {
    ...mapState(useBookingStore, ['bookedHotels']),
    isBooked() {
      return this.bookedHotels.find((hotel) => hotel.id === this.item.id) ? true : false
    }
  },
  methods: {
    ...mapActions(useBookingStore, ['selectHotel']),
    ...mapActions(useModalsStore, ['toggleModal']),
    selectHotelForm(hotel: HotelItemData) {
      this.toggleModal()
      this.selectHotel(hotel)
    }
  },
  props: {
    item: { type: Object as () => HotelItemData, required: true }
  },
  components: { MainButton, RatingStars, CheckBold }
}
</script>

<template>
  <li class="hotel-item" :class="{ booked: isBooked }">
    <h3>{{ item.name }}</h3>
    <p>{{ item.address }}</p>
    <div v-if="isBooked" class="checked">
      <CheckBold :size="64" fillColor="#4ade80" />
    </div>
    <RatingStars :rating="item.rating" withNum />
    <div>
      <MainButton @click="selectHotelForm(item)" :disabled="isBooked">Booking</MainButton>
    </div>
  </li>
</template>

<style scoped lang="scss">
@import '../../assets/styles/main.scss';
.hotel-item {
  @extend %flex_center;
  flex-direction: column;
  background-color: $primaryColor;
  margin: 1rem;
  padding: 1rem;
  width: 30%;
  max-width: 30%;
  min-height: 20rem;
  text-align: center;
  border: 2px solid $borderColor;
  border-radius: 0.8rem;
  position: relative;
  &.booked {
    opacity: 0.6;
  }
  @include media-query($lgScreen) {
    & {
      width: 46%;
      max-width: 46%;
    }
  }
  @include media-query($mdScreen) {
    & {
      width: 100%;
      max-width: 100%;
    }
  }
  h3 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    color: $subHeadingColor;
  }
  p {
    font-style: italic;
    color: $textColor;
    font-weight: bold;
    padding: 0;
  }
  .checked {
    position: absolute;
    left: 1rem;
    bottom: 2rem;
  }
}
</style>
