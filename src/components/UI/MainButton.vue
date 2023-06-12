<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import '../../assets/styles/main.scss';
button {
  padding: 1rem 2.5rem;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: $buttonBackground;
  border: 1px solid $borderColor;
  border-radius: 0.6rem;
  color: $textLightColor;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);
  @include media-query($smScreen) {
    margin-bottom: 1.5rem;
  }
  &:hover {
    background-color: transparent;
    color: $subHeadingColor;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #e2e8f0;
    color: $subHeadingColor;
  }
}
</style>
