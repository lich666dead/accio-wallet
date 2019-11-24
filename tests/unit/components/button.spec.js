import { shallowMount, createLocalVue } from '@vue/test-utils'
import Button from '@/components/Button.vue'
import vueBemCn from 'vue-bem-cn'
import { BEM_CONFIG } from '@/config'

const localVue = createLocalVue()

localVue.use(vueBemCn, { delimiters: BEM_CONFIG })

describe('components:Button.vue', () => {
  it('Should be mount', () => {
    const wrapper = shallowMount(Button, {
      localVue
    })
    expect(wrapper).toBeTruthy()
  })
})
