import React from 'react'
import { shallow } from 'enzyme'

import { renderWithTheme } from '<helpers>/testUtils'

import SkillCard from '<molecules>/SkillCard/SkillCard'
import Text from '<atoms>/Text/Text'

const setup = props => {
  const defaulfProps = {
    index: 1,
    skillTitle: 'Express JS',
    experience: '1 year',
    isTopSkill: true,
    onDelete: jest.fn(),
  }

  const skillCardWrapper = <SkillCard {...defaulfProps} {...props} />
  const wrapper = shallow(skillCardWrapper)

  return {
    wrapper,
    tree: renderWithTheme(skillCardWrapper),
    textWrapper: wrapper.find(Text),
  }
}

// Skill Card tests
describe('Component - DropDownMenu', () => {
  const { wrapper } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  // Test Internal Components
  describe('should render components', () => {
    test('3 for Text Component', () => {
      const { textWrapper } = setup()

      expect(textWrapper).toHaveLength(3)
    })

    test('first Select Option component text number 1', () => {
      const { textWrapper } = setup()

      expect(textWrapper.first().props().children).toEqual(1)
    })
  })

  // Css Tests
  describe('should render correct css propeties', () => {
    const { tree } = setup()

    test('for padding-right', () => {
      expect(tree).toHaveStyleRule('padding-right', '2.8rem')
    })

    test('for correct display', () => {
      expect(tree).toHaveStyleRule('display', 'flex')
    })
  })
})
