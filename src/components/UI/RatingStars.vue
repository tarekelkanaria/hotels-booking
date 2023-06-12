<script lang="ts">
// @ts-ignore
import Star from 'vue-material-design-icons/Star.vue'
// @ts-ignore
import StarOutline from 'vue-material-design-icons/StarOutline.vue'
export default {
  props: {
    rating: { type: Number, required: true },
    withNum: { type: Boolean, required: false }
  },
  components: { Star, StarOutline }
}
</script>

<template>
  <div class="rating">
    <Star class="svg-star" v-for="num in Math.round(rating)" :key="num.toString()" /><StarOutline
      v-for="num in Math.round(5 - rating)"
      :key="num.toString()"
    /><span v-if="withNum" class="number">{{ rating }}</span>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/styles/main.scss';

.rating {
  margin-block: 1rem;

  span:not(.number) {
    vertical-align: middle;
  }
  .number {
    margin-left: 1rem;
    font-weight: bold;
    color: $textColor;
  }
}
</style>
