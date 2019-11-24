<template>
  <div :class="b({ variant })">
    <slot />
  </div>
</template>

<script>
import {
  IconVariants,
  IconType,
  ColorVariants
} from '@/config'

/**
 * @example
 * <Title>My content</Title>
 */
export default {
  name: 'Title',
  props: {
    variant: {
      type: String,
      default: ColorVariants.black
    }
  }
}
</script>

<style lang="scss">
@import "src/styles/variables";

.Title {
  font-family: Poppins-Bold;
  font-size: 48px;
  line-height: 58px;

  &_variant-black {
    color: $black;
  }
}
</style>
