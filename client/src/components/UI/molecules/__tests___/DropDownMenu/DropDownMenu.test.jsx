import React from 'react'
import { shallow } from 'enzyme'

import { renderWithTheme } from '<helpers>/testUtils'
import DropdownMenu from '<molecules>/DropdownMenu/DropdownMenu'
import dropDownItems from '<fixtures>/dropDownItems'
import SelectOption from '<atoms>/SelectOption/SelectOption'

const setup = props => {
  const defaulfProps = {
    items: [...dropDownItems],
    onChange: jest.fn(),
  }

  const dropDownWrapper = (<DropdownMenu {...defaulfProps} {...props} />)
  const wrapper = shallow(dropDownWrapper)

  return {
    wrapper,
    tree: renderWithTheme(dropDownWrapper),
    selectOptions: wrapper.find(SelectOption),
  }
}

// Dropdown menu tests
describe('Component - DropDownMenu', () => {
  const { wrapper } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  // Test select Options
  describe('should render components', () => {
    test('3 for Select Option', () => {
      const { selectOptions } = setup()

      expect(selectOptions).toHaveLength(3)
    })

    test('first Select Option component text', () => {
      const { selectOptions } = setup()

      expect(selectOptions.first().props().name).toEqual('Jobbatical')
    })
  })

  // Test Css properties
  describe('should render correct css propeties', () => {
    const { tree } = setup()

    test('for font size', () => {
      expect(tree).toHaveStyleRule('width', '22.4rem')
    })

    test('for correct padding', () => {
      expect(tree).toHaveStyleRule('border-radius', '.4rem')
    })
  })
})
