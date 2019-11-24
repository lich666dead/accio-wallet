import Home from '@/pages/Home.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import vueBemCn from 'vue-bem-cn'
import { BEM_CONFIG } from '@/config'

const localVue = createLocalVue()

localVue.use(vueBemCn, { delimiters: BEM_CONFIG })

describe('pages:Home.vue', () => {
  it('Should be mount', () => {
    const wrapper = shallowMount(Home, {
      localVue
    })
    expect(wrapper).toBeTruthy()
  })
})
