import React from 'react'
import { shallow } from 'enzyme'

import { renderWithTheme } from '<helpers>/testUtils'
import TextInput from '<atoms>/TextInput/TextInput'

const setup = props => {
  const defaultProps = {
    placeholder: 'Message',
    value: 'Jobbatical',
    onChange: () => { },
    inputWidth: 'xxl',
  }
  const textInput = (<TextInput {...defaultProps} {...props} />)

  return {
    wrapper: shallow(textInput),
    tree: renderWithTheme(textInput),
  }
}

// TextInput test
describe('Component - TextInput', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBeTruthy()
  })

  test('should have red border when error', () => {
    const { tree } = setup({
      isError: true,
    })

    expect(tree).toHaveStyleRule('border', '1px solid #E50000')
  })

  test('should call onChange function', () => {
    const onChange = jest.fn()
    const { wrapper } = setup({
      onChange,
    })

    wrapper.simulate('change', {
      target: { value: 'New message' },
    })

    expect(onChange).toHaveBeenCalled()
  })

  // CSS tests
  test('should render css on hover', () => {
    const { tree } = setup()

    expect(tree).toHaveStyleRule('border', '1px solid #0F2944', {
      hover: '&:hover',
    })
  })

  test('should render css on focus', () => {
    const { tree } = setup()

    expect(tree).toHaveStyleRule('border', '1px solid #0F2944', {
      hover: '&:focus',
    })
  })
})
