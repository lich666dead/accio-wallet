import { shallowMount, createLocalVue } from '@vue/test-utils'
import Create from '@/pages/Create.vue'
import vueBemCn from 'vue-bem-cn'
import { BEM_CONFIG } from '@/config'

const localVue = createLocalVue()

localVue.use(vueBemCn, { delimiters: BEM_CONFIG })

describe('pages:Create.vue', () => {
  it('Should be mount', () => {
    const wrapper = shallowMount(Create, {
      localVue
    })
    expect(wrapper).toBeTruthy()
  })
})
