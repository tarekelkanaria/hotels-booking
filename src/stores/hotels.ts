import { defineStore } from 'pinia'
import type { HotelItemData } from '@/components/types/types'

export const useHotelsStore = defineStore('hotels', {
  state: () => ({ hotels: [] as HotelItemData[] }),
  actions: {
    async getHotels() {
      this.hotels = (await import('../data/hotels.json')).default.hotels
    }
  }
})
