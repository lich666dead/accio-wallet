import { shallowMount, createLocalVue } from '@vue/test-utils'
import Title from '@/components/Title.vue'
import vueBemCn from 'vue-bem-cn'
import { BEM_CONFIG } from '@/config'

const localVue = createLocalVue()

localVue.use(vueBemCn, { delimiters: BEM_CONFIG })

describe('components:Title.vue', () => {
  it('Should be mount', () => {
    const wrapper = shallowMount(Title, {
      localVue
    })
    expect(wrapper).toBeTruthy()
  })
})
