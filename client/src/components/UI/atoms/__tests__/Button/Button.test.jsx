import React from 'react'

import { shallow } from 'enzyme'
import Button from '../../Button/Button'

const setup = props => {
  const defaultProps = {
    disabled: false,
    padding: '5rem',
    onClick: () => { },
  }
  const wrapper = shallow(
    <Button {...defaultProps} {...props}>
      Test button
    </Button>
  )

  return {
    wrapper,
  }
}

describe('Component - Button', () => {
  const { wrapper } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('should have padding', () => {
    expect(wrapper.props().padding).toEqual('5rem')
  })

  test('should have disabled prop set to false', () => {
    expect(wrapper.props().disabled).toEqual(false)
  })

  test('should have disabled prop set to true', () => {
    const { wrapper } = setup({ disabled: true })
    expect(wrapper.props().disabled).toEqual(true)
  })

  test('should call onClick function after user clicks', () => {
    const onClick = jest.fn()
    const { wrapper } = setup({
      onClick,
    })

    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
