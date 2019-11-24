<template>
  <p :class="b({ variant, font })">
    <slot />
  </p>
</template>

<script>
import {
  IconVariants,
  IconType,
  ColorVariants,
  FontVariants
} from '@/config'

/**
 * @example
 * <Text>My content</Text>
 */
export default {
  name: 'P',
  props: {
    variant: {
      type: String,
      default: ColorVariants.black
    },
    font: {
      type: String,
      default: FontVariants.PoppinsLight
    }
  }
}
</script>

<style lang="scss">
@import "src/styles/variables";

.P {
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 32px;

  &_variant-black {
    color: $black;
  }

  &_font-PoppinsLight {
    font-family: Poppins-Light;
  }
}
</style>
