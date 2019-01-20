import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SkillCard from '../../molecules/SkillCard/SkillCard'

const TOP_SKILLS_LENGTH = 5

const SkillCardsList = ({ cards, onDelete }) => {
  const renderCards = cards.map((card, index) => {
    const newIndex = index + 1
    const isTopSkill = newIndex && (newIndex <= TOP_SKILLS_LENGTH)
    return (<SkillCard
      key={`${index}+${card.skillTitle}`}
      index={card.index}
      skillTitle={card.skillTitle}
      experience={card.experience}
      isTopSkill={isTopSkill}
      onDelete={onDelete}
    />)
  })

  return (
    <SkillCardsList.Container>
      {renderCards}
    </SkillCardsList.Container>
  )
}

SkillCardsList.Container = styled.div`
  background-color: ${props => props.theme.backgroundColors.lightGrey};
  display: flex;
  flex-flow: row wrap;
  padding: ${props => props.theme.spacing.smPlusXs};
`

SkillCardsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      skillTitle: PropTypes.string,
      experience: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
}

export default SkillCardsList
