import React from 'react'
import { shallow } from 'enzyme'

import AddSkillsSection from '../AddSkillsSection'

const setup = props => {
  const defaulfProps = {
    name: 'test',
    showError: false,
    errorMessage: 'This is error Message',
    onSelectedChange: jest.fn(),
    onClick: jest.fn(),
  }

  const addSkill = <AddSkillsSection {...defaulfProps} {...props} />
  const wrapper = shallow(addSkill)

  return {
    wrapper,
  }
}

describe('AddSkilsSection', () => {
  const { wrapper } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
