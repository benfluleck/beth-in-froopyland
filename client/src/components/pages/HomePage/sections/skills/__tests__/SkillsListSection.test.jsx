import React from 'react'
import { shallow } from 'enzyme'

import { renderWithTheme } from '<helpers>/testUtils'
import cardItems from '<fixtures>/cardItems'

import { SkillsListSection } from '../SkillsListSection'

const setup = props => {
  const defaulfProps = {
    cards: cardItems,
    deleteSkill: jest.fn(),
  }

  const skillListSection = <SkillsListSection {...defaulfProps} {...props} />
  const wrapper = shallow(skillListSection)

  return {
    wrapper,
    tree: renderWithTheme(skillListSection),
  }
}

describe('Component - TextInput', () => {
  const { wrapper } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
