import React from 'react'
import { shallow } from 'enzyme'

import SelectOption from '<atoms>/SelectOption/SelectOption'

const setup = props => {
  const defaultProps = {
    name: 'Test Name',
    value: 'testValue',
  }
  const selectOption = (<SelectOption {...defaultProps} {...props} />)

  const wrapper = shallow(selectOption)

  return {
    wrapper,
  }
}

describe('Component - ButtonClose', () => {
  const { wrapper } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  describe('should have correct props', () => {
    const { wrapper } = setup()

    test('for name and render as text', () => {
      expect(wrapper.props().children).toEqual('Test Name')
      expect(wrapper.text()).toEqual('Test Name')
    })

    test('for value', () => {
      expect(wrapper.props().value).toEqual('testValue')
    })
  })
})
