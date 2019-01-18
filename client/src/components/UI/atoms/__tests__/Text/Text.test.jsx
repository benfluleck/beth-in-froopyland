import React from 'react'
import { shallow } from 'enzyme'
import Text from '../../Text/Text'


const setup = props => {
  const defaultProps = {
    display: 'inline',
    fontSize: '1.6rem',
    textAlign: 'center',
    fontWeight: 500,
    color: '#3c414d',
  }
  const wrapper = shallow(<Text {...defaultProps} {...props}>Test</Text>)

  return {
    wrapper,
    container: wrapper.find(Text.Container)
  }
}

describe('Component - Text', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBeTruthy()
  })

  test('should have correct content', () => {
    const { wrapper } = setup()

    expect(wrapper.props().children).toEqual('Test')
  })

  describe('should have correct props', () => {
    test('for display', () => {
      const { wrapper } = setup()

      expect(wrapper.props().display).toEqual('inline')
    })
    test('for color', () => {
      const { wrapper } = setup()

      expect(wrapper.props().color).toEqual('#3c414d')
    })
    test('for fontWeight', () => {
      const { wrapper } = setup()

      expect(wrapper.props().fontWeight).toEqual(500)
    })
    test('for textalign', () => {
      const { wrapper } = setup()

      expect(wrapper.props().textAlign).toEqual('center')
    })
  })
})
