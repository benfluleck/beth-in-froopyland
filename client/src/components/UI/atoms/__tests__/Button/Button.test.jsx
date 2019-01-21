import React from 'react'
import { shallow } from 'enzyme'

import { renderWithTheme } from '<helpers>/testUtils'
import Button from '<atoms>/Button/Button'

const setup = props => {
  const defaultProps = {
    disabled: false,
    padding: 'md',
    onClick: () => {},
  }
  const button = (
    <Button {...defaultProps} {...props}>
      Test button
    </Button>
  )

  const wrapper = shallow(button)

  const tree = renderWithTheme(button)

  return {
    wrapper,
    tree,
  }
}
// Button tests
describe('Component - Button', () => {
  const { wrapper } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  // Prop tests
  test('should have padding', () => {
    expect(wrapper.props().padding).toEqual('md')
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

  // Css Tests
  describe('should render correct css propeties', () => {
    const { tree } = setup()

    test('for font size', () => {
      expect(tree).toHaveStyleRule('font-size', '1rem')
    })

    test('for correct padding', () => {
      expect(tree).toHaveStyleRule('padding', '0 3.2rem')
    })

    test('for correct color', () => {
      expect(tree).toHaveStyleRule('color', '#FFFFFF')
    })
  })
})
