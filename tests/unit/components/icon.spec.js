import { shallowMount, createLocalVue } from '@vue/test-utils'
import Icon from '@/components/Icon.vue'
import vueBemCn from 'vue-bem-cn'
import { BEM_CONFIG, IconVariants } from '@/config'

const localVue = createLocalVue()

localVue.use(vueBemCn, { delimiters: BEM_CONFIG })

describe('components:Icon.vue', () => {
  it('Should be mount', () => {
    const wrapper = shallowMount(Icon, {
      localVue,
      propsData: {
        icon: IconVariants.logo
      }
    })
    expect(wrapper).toBeTruthy()
  })
})
