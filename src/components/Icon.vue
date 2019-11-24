<template>
  <img
    :class="b({ pointer })"
    :src="src"
    :height="height"
    :width="width"
  >
</template>

<script>
import {
  IconVariants,
  IconType
} from '@/config'

/**
 * @example
 * <Icon :icon="iconVariants.logo" />
 */
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: IconType.svg
    },
    height: {
      type: [Number, String],
      default: 100
    },
    width: {
      type: [Number, String],
      default: 100
    },
    pointer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    src() {
      return `/icons/${this.icon}.${this.type}`
    }
  }
}
</script>

<style lang="scss">
.Icon {
  &_pointer {
    cursor: pointer;
  }
}
</style>
