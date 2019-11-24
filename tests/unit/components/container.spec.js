import { shallowMount, createLocalVue } from '@vue/test-utils'
import Container from '@/components/Container.vue'
import vueBemCn from 'vue-bem-cn'
import { BEM_CONFIG } from '@/config'

const localVue = createLocalVue()

localVue.use(vueBemCn, { delimiters: BEM_CONFIG })

describe('components:Container.vue', () => {
  it('Should be mount', () => {
    const wrapper = shallowMount(Container, {
      localVue
    })
    expect(wrapper).toBeTruthy()
  })
})
