<template>
  <section class="container">
    <h2>Sorry Page Not Found</h2>
    <div class="poster">
      <img src="../assets/images/page_not_found.svg" alt="Not Found" loading="lazy" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/styles/main.scss';

section {
  @extend %flex_center;
  flex-direction: column;
  margin-block: 2rem;
  gap: 2rem;
  h2 {
    @extend %main_title;
    margin-bottom: 3rem;
  }
  .poster {
    width: 80%;
    margin: auto;
    text-align: center;
    background-color: $primaryColor;
    border-radius: 0.8rem;
    @include media-query($mdScreen) {
      & {
        width: 100%;
      }
    }
  }
  img {
    max-width: 100%;
    max-height: 60vh;
    border-radius: 0.8rem;
  }
}
</style>
