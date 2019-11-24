import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import vueBemCn from 'vue-bem-cn'
import { BEM_CONFIG } from '@/config'

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(vueBemCn, { delimiters: BEM_CONFIG })

const router = new VueRouter()

describe('root:App.vue', () => {
  it('Should be mount', () => {
    const wrapper = shallowMount(App, {
      localVue,
      router
    })
    expect(wrapper).toBeTruthy()
  })
})
