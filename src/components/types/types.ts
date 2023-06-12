export interface HotelItemData {
  id: string
  name: string
  address: string
  rating: number
}

export type UserFormData = {
  userName: string
  userMail: string
  userPhone: string
  nameTouched: boolean
  mailTouched: boolean
  phoneTouched: boolean
}
