<template>
  <div :class="b()">
    <div :class="b('wrapper')">
      <Icon
        :icon="iconVariants.logo"
      />
      <Title>
        {{ title }}
      </Title>
      <P>
        {{ subTitle }}
      </P>
      <Button
        v-for="button of buttons"
        :key="button.key"
        :size="button.size"
        :class="b('action')"
        round
        block
      >
        {{ button.text }}
      </Button>
    </div>
  </div>
</template>

<script>
import { uuid } from 'uuidv4'
import {
  IconVariants,
  SizeVariants,
  ColorVariants
} from '@/config'

import Icon from '@/components/Icon'
import Title from '@/components/Title'
import P from '@/components/P'
import Button from '@/components/Button'

const title = 'Grin'
const subTitle = 'A simple Grin wallet for your enjoyment.'
const buttons = [
  {
    key: uuid(),
    size: SizeVariants.md,
    color: ColorVariants.primary,
    text: 'Create new wallet'
  },
  {
    key: uuid(),
    size: SizeVariants.md,
    color: ColorVariants.primary,
    text: 'Import wallet'
  }
]

export default {
  name: 'First',
  components: {
    Icon,
    Title,
    P,
    Button
  },
  data() {
    return {
      title,
      subTitle,
      buttons,
      iconVariants: IconVariants
    }
  }
}
</script>

<style lang="scss">
.First {
  padding-left: 40px;
  padding-right: 40px;
}

.First {
  &__wrapper {
    display: grid;
    grid-template-rows: 1fr 35px 150px;
    grid-row-gap: 10px;

    justify-content: center;

    margin-top: 100px;
  }
}
</style>
