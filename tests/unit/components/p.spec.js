import { shallowMount, createLocalVue } from '@vue/test-utils'
import P from '@/components/P.vue'
import vueBemCn from 'vue-bem-cn'
import { BEM_CONFIG } from '@/config'

const localVue = createLocalVue()

localVue.use(vueBemCn, { delimiters: BEM_CONFIG })

describe('components:P.vue', () => {
  it('Should be mount', () => {
    const wrapper = shallowMount(P, {
      localVue
    })
    expect(wrapper).toBeTruthy()
  })
})
