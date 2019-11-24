import First from '@/pages/First.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import vueBemCn from 'vue-bem-cn'
import { BEM_CONFIG } from '@/config'

const localVue = createLocalVue()

localVue.use(vueBemCn, { delimiters: BEM_CONFIG })

describe('pages:First.vue', () => {
  it('Should be mount', () => {
    const wrapper = shallowMount(First, {
      localVue
    })
    expect(wrapper).toBeTruthy()
  })
})
