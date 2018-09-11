import { shallowMount } from '@vue/test-utils'
import Comment from '@/components/UserList.vue'

describe('UserList.vue', () => {
  it('Должен быть экземпляром Vue', () => {
    const wrapper = shallowMount(Comment, {
      propsData: {
        users: []
      }
    })

    expect(wrapper.isVueInstance()).toEqual(true)
  })

  it('Содержит входной параметр user', () => {
    const wrapper = shallowMount(Comment, {
      propsData: {
        users: []
      }
    })

    expect(wrapper.vm.users).toBeDefined()
    expect(wrapper.vm.users).toEqual([])
  })
})
