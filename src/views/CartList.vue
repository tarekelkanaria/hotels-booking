<script lang="ts">
import { useBookingStore } from '../stores/booking'
import { mapState, mapActions } from 'pinia'
import RatingStars from '../components/UI/RatingStars.vue'
import MainButton from '../components/UI/MainButton.vue'

export default {
  computed: {
    ...mapState(useBookingStore, ['bookedHotels'])
  },
  methods: {
    ...mapActions(useBookingStore, ['cancelBooking']),
    removeBooking(id: string) {
      this.cancelBooking(id)
    }
  },
  components: {
    RatingStars,
    MainButton
  }
}
</script>

<template>
  <aside>
    <h2>Your booked hotels list</h2>
    <ul class="booked-list container">
      <template v-if="bookedHotels.length > 0">
        <li v-for="hotel in bookedHotels" :key="hotel.id" class="hotel-item">
          <h3>{{ hotel.name }}</h3>
          <RatingStars :rating="hotel.rating" />
          <MainButton @click="removeBooking(hotel.id)">Cancel</MainButton>
        </li>
      </template>
      <li v-else class="default">
        <p>No hotels you've booked yet!</p>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
@import '../assets/styles/main.scss';

h2 {
  @extend %main_title;
  margin-bottom: 2.5rem;
}
.booked-list {
  @extend %main_list;
  .hotel-item {
    @extend %flex_between;
    background-color: $primaryColor;
    padding: 1rem;
    margin: 2rem auto;
    width: 80%;
    border: 2px solid $borderColor;
    border-radius: 0.8rem;
    @include media-query($smScreen) {
      & {
        flex-direction: column;
      }
    }
  }
  h3 {
    color: $subHeadingColor;
  }
}
.default {
  p {
    color: $textColor;
    font-size: 2.4rem;
    font-weight: bold;
    text-align: center;
  }
}
</style>
