import React from 'react'
import PropTypes from 'prop-types'

import SkillCardsList from '../../../../UI/organisms/SkillCardsList/SkillCardsList'

/**
 * @description - contains a Skills List Card organism
 *
 * @returns {JSX} - Skills Card List organisms
 * @prop {array} - contains index, skillTitle, experience arguments
 */
export const SkillsListSection = ({ cards, deleteSkill }) => (
  <SkillCardsList cards={cards} onDelete={deleteSkill} />
)

SkillsListSection.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      skillTitle: PropTypes.string,
      experience: PropTypes.string,
    })
  ),
  deleteSkill: PropTypes.func,
}
