<script lang="ts">
import { useHotelsStore } from '../stores/hotels'
import { useModalsStore } from '../stores/modals'
import { mapActions, mapState } from 'pinia'
import HotelItem from '../components/Hotels/HotelItem.vue'
import ModalsLogic from '../components/Modals/ModalsLogic.vue'

export default {
  computed: {
    ...mapState(useHotelsStore, ['hotels']),
    ...mapState(useModalsStore, ['modalIsOpen'])
  },
  methods: {
    ...mapActions(useHotelsStore, ['getHotels'])
  },
  mounted() {
    this.getHotels()
  },
  components: { HotelItem, ModalsLogic }
}
</script>

<template>
  <main>
    <h2 class="main-title">Hotels List</h2>
    <ul class="hotels-list container">
      <HotelItem v-for="hotel in hotels" :key="hotel.id" :item="hotel" />
    </ul>
    <Teleport to="#modals">
      <Transition name="from-top" :duration="800">
        <ModalsLogic v-if="modalIsOpen" />
      </Transition>
    </Teleport>
  </main>
</template>

<style scoped lang="scss">
@import '../assets/styles/main.scss';
.main-title {
  @extend %main_title;
}
.hotels-list {
  @extend %main_list;
}
.from-top-enter-active,
.from-top-leave-active {
  transition: transform 0.4s cubic-bezier(0.47, 0, 0.745, 0.715);
}

.from-top-enter-from,
.from-top-leave-to {
  transform: translateY(-100%);
}
</style>
