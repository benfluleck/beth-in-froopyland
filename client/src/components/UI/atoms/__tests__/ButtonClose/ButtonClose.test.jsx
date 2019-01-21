import React from 'react'
import { shallow } from 'enzyme'

import { renderWithTheme } from '<helpers>/testUtils'
import ButtonClose from '<atoms>/ButtonClose/ButtonClose'

const setup = props => {
  const defaultProps = {
    onClick: () => {},
  }
  const buttonClose = <ButtonClose {...defaultProps} {...props} />

  const wrapper = shallow(buttonClose)

  const tree = renderWithTheme(buttonClose)

  return {
    wrapper,
    tree,
  }
}

// ButtonClose Tests
describe('Component - ButtonClose', () => {
  const { wrapper } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  // Props Tests
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
      expect(tree).toHaveStyleRule('font-size', '1.4rem')
    })

    test('for correct padding', () => {
      expect(tree).toHaveStyleRule('text-align', 'center')
    })

    test('for correct color', () => {
      expect(tree).toHaveStyleRule('color', '#D7D6D9')
    })
  })
})
