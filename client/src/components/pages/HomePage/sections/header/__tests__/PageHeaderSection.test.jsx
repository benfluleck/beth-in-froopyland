import React from 'react'
import { shallow } from 'enzyme'

import { renderWithTheme } from '<helpers>/testUtils'
import { PageHeaderSection } from '../PageHeaderSection'
import Text from '<atoms>/Text/Text'

const setup = () => {
  const pageHeader = <PageHeaderSection />

  const wrapper = shallow(pageHeader)
  const tree = renderWithTheme(pageHeader)

  return {
    wrapper,
    tree,
    textInput: wrapper.find(Text),
  }
}

describe('PageHeaderSection', () => {
  const { wrapper, textInput } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Text Component', () => {
    test('should render 1 Text Component', () => {
      expect(textInput).toHaveLength(1)
    })

    test('should render text', () => {
      expect(textInput.props().children).toEqual('Add Skills')
    })
  })

  describe('should render correct css propeties', () => {
    const { tree } = setup()

    test('for padding-bottom', () => {
      expect(tree).toHaveStyleRule('padding-bottom', '3.2rem')
    })
  })
})
