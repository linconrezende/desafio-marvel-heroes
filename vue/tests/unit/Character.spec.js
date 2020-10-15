import Character from '@/components/Character.vue'
import Vuetify from 'vuetify'

import { createLocalVue, mount } from '@vue/test-utils'

describe('Character.vue', () => {
  const localVue = createLocalVue()
  let _char = { name: 'Beyonder' }
  let vuetify
  
  beforeEach(() => {
    vuetify = new Vuetify()
  })
  
  it('renders props.msg when passed', () => {
    const wrapper = mount(Character, {
      localVue,
      vuetify,
      propsData: {
        character: _char
      }
    })
    expect(wrapper.find('#character-characterName').text()).toBe(_char.name)
  })
})
