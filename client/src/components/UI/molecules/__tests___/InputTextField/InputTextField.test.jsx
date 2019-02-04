import React from 'react'
import { shallow } from 'enzyme'

import { renderWithTheme } from '<helpers>/testUtils'

import InputTextField from '<molecules>/InputTextField/InputTextField'
import TextInput from '<atoms>/TextInput/TextInput'

const setup = props => {
  const defaulfProps = {
    value: 'test',
    placeholder: 'test placeholder',
    showError: false,
    errorMessage: 'This is error Message',
    onChange: jest.fn(),
    onDelete: jest.fn(),
  }

  const inputTextField = <InputTextField {...defaulfProps} {...props} />
  const wrapper = shallow(inputTextField)

  return {
    wrapper,
    tree: renderWithTheme(inputTextField),
    inputTextWrapper: wrapper.find(TextInput),
  }
}

describe('Component - TextInput', () => {
  const { wrapper, inputTextWrapper } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('should render 1 textInput', () => {
    expect(inputTextWrapper).toHaveLength(1)
  })
})
