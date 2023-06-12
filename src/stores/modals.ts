import { defineStore } from 'pinia'

export const useModalsStore = defineStore('modals', {
  state: (): { modalIsOpen: boolean; formHasSubmitted: boolean } => ({
    modalIsOpen: false,
    formHasSubmitted: false
  }),
  actions: {
    toggleModal() {
      this.modalIsOpen = !this.modalIsOpen
    },
    finishSubmit() {
      this.formHasSubmitted = true
    }
  }
})
