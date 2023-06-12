import { defineStore } from 'pinia'

const storedData = JSON.parse(localStorage.getItem('user') as string)
export const useUserStore = defineStore('user', {
  state: (): { userName: string; userExisted: boolean } => ({
    userName: storedData ? storedData['user-name'] : '',
    userExisted: storedData ? storedData['user-exist'] : false
  }),
  actions: {
    getUserName(user: string) {
      this.userName = user
      const updatedData = JSON.parse(localStorage.getItem('user') as string)
      localStorage.setItem('user', JSON.stringify({ ...updatedData, 'user-name': this.userName }))
    },
    handelUser() {
      this.userExisted = true
      const updatedData = JSON.parse(localStorage.getItem('user') as string)
      localStorage.setItem(
        'user',
        JSON.stringify({ ...updatedData, 'user-exist': this.userExisted })
      )
    }
  }
})
