<script lang="ts">
import { useBookingStore } from '@/stores/booking'
import { useUserStore } from '@/stores/user'
import { useModalsStore } from '@/stores/modals'
import { mapActions, mapState } from 'pinia'
import type { UserFormData } from '../types/types'
// @ts-ignore
import WindowClose from 'vue-material-design-icons/WindowClose.vue'
import MainButton from '../UI/MainButton.vue'

export default {
  data(): UserFormData {
    return {
      userName: '',
      userMail: '',
      userPhone: '',
      nameTouched: false,
      mailTouched: false,
      phoneTouched: false
    }
  },
  computed: {
    validateUserName() {
      if (isNaN(parseInt(this.userName))) {
        return this.userName.length > 2
      } else {
        return false
      }
    },
    validateUserMail() {
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.userMail)
    },
    validateUserPhone() {
      if (!isNaN(parseInt(this.userPhone))) {
        return this.userPhone.toString().length <= 11 && this.userPhone.toString().length > 6
      } else {
        return false
      }
    },
    nameInvalid() {
      return !this.validateUserName && this.nameTouched
    },
    mailInvalid() {
      return !this.validateUserMail && this.mailTouched
    },
    phoneInvalid() {
      return !this.validateUserPhone && this.phoneTouched
    },
    validateForm() {
      return this.validateUserName && this.validateUserMail && this.validateUserPhone
    },
    ...mapState(useBookingStore, ['selectedHotel'])
  },
  methods: {
    ...mapActions(useBookingStore, ['bookingHotel']),
    ...mapActions(useUserStore, ['getUserName']),
    ...mapActions(useModalsStore, ['toggleModal', 'finishSubmit']),
    submitData() {
      this.bookingHotel(this.selectedHotel)
      this.getUserName(this.userName)
      this.finishSubmit()
    }
  },
  components: { MainButton, WindowClose }
}
</script>

<template>
  <form @submit.prevent="submitData">
    <WindowClose fillColor="#f43f5e" :size="48" class="close-modal" @click="toggleModal" />
    <div>
      <label for="user-name">Name<sup>*</sup> : </label>
      <input
        type="text"
        id="user-name"
        placeholder="Enter your name"
        :class="{ invalid: nameInvalid }"
        @blur="nameTouched = true"
        @focus="nameTouched = false"
        v-model.lazy.trim="userName"
      />
    </div>
    <p v-show="!validateUserName && nameTouched" class="error">
      Name Must be more than 2 characters
    </p>
    <div>
      <label for="user-mail">E-mail<sup>*</sup> : </label>
      <input
        type="email"
        id="user-mail"
        placeholder="Enter your e-mail"
        :class="{ invalid: mailInvalid }"
        @blur="mailTouched = true"
        @focus="mailTouched = false"
        v-model.lazy.trim="userMail"
      />
    </div>
    <p v-show="!validateUserMail && mailTouched" class="error">Please enter a valid email</p>
    <div>
      <label for="user-phone">phone<sup>*</sup> : </label>
      <input
        type="tel"
        id="user-phone"
        placeholder="Enter your phone"
        :class="{ invalid: phoneInvalid }"
        @blur="phoneTouched = true"
        @focus="phoneTouched = false"
        v-model.lazy.trim="userPhone"
      />
    </div>
    <p v-show="!validateUserPhone && phoneTouched" class="error">Please enter a valid phone</p>
    <div>
      <MainButton type="submit" :disabled="!validateForm">Book now</MainButton>
      <MainButton class="cancel" @click.prevent="toggleModal">Cancel</MainButton>
    </div>
  </form>
</template>

<style scoped lang="scss">
@import '../../assets/styles/main.scss';
form {
  @extend %modal_window;
  > div {
    @extend %input_wrapper;
    label {
      color: $subHeadingColor;
      white-space: nowrap;
      font: {
        size: 1.8rem;
        weight: bold;
      }
      flex-basis: 30%;
      @include media-query($smScreen) {
        & {
          flex-basis: unset;
          width: 100%;
          margin-bottom: 2rem;
        }
      }
    }
    input {
      display: block;
      margin-left: 1rem;
      height: 4rem;
      padding-block: 1rem;
      text-indent: 1rem;
      background-color: #e0e7ff;
      font-size: 1.8rem;
      flex-basis: 70%;
      border: 1px solid transparent;
      border-radius: 0.4rem;
      @include media-query($smScreen) {
        & {
          flex-basis: unset;
          width: 100%;
          margin-bottom: 1rem;
          margin-left: 0;
        }
      }
      &:focus {
        outline: none;
        border: 1px solid #60a5fa;
      }
      &::placeholder {
        color: $textColor;
      }
      &.invalid {
        border: 1px solid #f43f5e;
        background-color: #fecdd3;
      }
    }
    sup {
      color: #f43f5e;
      font-size: 1.4rem;
    }
  }
  .error {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    color: red;
  }
  .cancel {
    @extend %cancel_btn;
  }
}
</style>
