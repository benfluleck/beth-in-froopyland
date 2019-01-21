import React from 'react'
import { shallow } from 'enzyme'

import { renderWithTheme } from '<helpers>/testUtils'

import SkillCardsList from '<organisms>/SkillCardsList/SkillCardsList'
import SkillCard from '<molecules>/SkillCard/SkillCard'
import cardItems from '<fixtures>/cardItems'

const setup = props => {
  const defaulfProps = {
    cards: cardItems,
    onDelete: jest.fn(),
  }

  const skillCardsListWrapper = <SkillCardsList {...defaulfProps} {...props} />
  const wrapper = shallow(skillCardsListWrapper)

  return {
    wrapper,
    tree: renderWithTheme(skillCardsListWrapper),
    skillCardsListWrapper: wrapper.find(SkillCard),
  }
}

// SkillCards List Component Tests
describe('Component - SkillCardsList', () => {
  const { wrapper } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  describe('should render', () => {
    const { skillCardsListWrapper } = setup()
    test('7 SkillCard Components', () => {
      expect(skillCardsListWrapper).toHaveLength(7)
    })

    test('first SkillCard component with text number 1', () => {
      expect(skillCardsListWrapper.first().props().skillTitle).toEqual(
        'Express JS'
      )
    })

    describe('should props for first skill card', () => {
      const firstSkillCard = skillCardsListWrapper.first().props()
      test('experience to be 1 Year', () => {
        expect(firstSkillCard.experience).toEqual('1 year')
      })

      test('isTopSkill true', () => {
        expect(firstSkillCard.isTopSkill).toEqual(true)
      })
    })
  })

  // Css Tests
  describe('should render correct css propeties', () => {
    const { tree } = setup()

    test('for padding', () => {
      expect(tree).toHaveStyleRule('padding', '2rem')
    })

    test('for correct flex-flow', () => {
      expect(tree).toHaveStyleRule('flex-flow', 'row wrap')
    })
  })
})
