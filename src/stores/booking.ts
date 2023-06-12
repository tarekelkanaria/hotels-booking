import { defineStore } from 'pinia'
import type { HotelItemData } from '@/components/types/types'

const storedData = JSON.parse(localStorage.getItem('user') as string)

export const useBookingStore = defineStore('booking', {
  state: (): { selectedHotel: HotelItemData; bookedHotels: HotelItemData[] } => ({
    selectedHotel: {} as HotelItemData,
    bookedHotels: (storedData ? storedData['booked-hotels'] : []) as HotelItemData[]
  }),
  actions: {
    selectHotel(hotel: HotelItemData) {
      this.selectedHotel = hotel
    },
    bookingHotel(hotel: HotelItemData) {
      const existedHotel = this.bookedHotels.find((item) => item.id === hotel.id)
      if (!existedHotel) {
        this.bookedHotels.push(hotel)
      }
      const updatedData = JSON.parse(localStorage.getItem('user') as string)
      localStorage.setItem(
        'user',
        JSON.stringify({ ...updatedData, 'booked-hotels': this.bookedHotels })
      )
    },
    cancelBooking(id: string) {
      const removedHotelIndex = this.bookedHotels.findIndex((hotel) => hotel.id === id)
      this.bookedHotels.splice(removedHotelIndex, 1)
      const updatedData = JSON.parse(localStorage.getItem('user') as string)
      localStorage.setItem(
        'user',
        JSON.stringify({ ...updatedData, 'booked-hotels': this.bookedHotels })
      )
    }
  }
})
