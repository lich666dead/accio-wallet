<template>
  <button
    :class="b({ round, block, size, color })"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
import {
  ColorVariants,
  SizeVariants
} from '@/config'

/**
 * @example
 * import { ColorVariants, SizeVariants } from '@/config'
 * <Button
 *   :size="SizeVariants.md"
 *   :color="ColorVariants.primary"
 *   round
 *   block
 *  >
 *    {{ button.text }}
 *  </Button>
 */
export default {
  name: 'Button',
  props: {
    size: {
      type: String,
      default: SizeVariants.xs
    },
    color: {
      type: String,
      default: ColorVariants.primary
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "src/styles/variables";

.Button {
  cursor: pointer;
  box-sizing: border-box;

  font-family: Poppins-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 31px;

  border: 0;
  outline: none;
}

.Button {
  &_round {
    border-radius: .25rem;
  }

  &_block {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.Button {
  &_color-primary {
    background-color: $primary;
  }

  &_color-white {
    background-color: $white;
  }

  &_color-gray {
    background-color: $gray;
  }

  &_color-success {
    background-color: $success;
  }

  &_color-info {
    background-color: $info;
  }

  &_color-danger {
    background-color: $danger;
  }

  &_color-transparent {
    background: transparent;
    border: 1px solid $black;
  }
}

.Button {
  &_size-xs {
    padding: $xs;
  }

  &_size-sm {
    padding: $sm;
  }

  &_size-md {
    padding: $md;
  }

  &_size-lg {
    padding: $lg;
  }

  &_size-xl {
    padding: $xl;
  }

  &_size-xll {
    padding: $xll;
  }
}

.Button {
  &[disabled="disabled"] {
    cursor: unset;
    opacity: 0.5;
  }
}
</style>
