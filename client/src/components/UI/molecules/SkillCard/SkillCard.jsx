import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Text from '../../atoms/Text/Text'
import ButtonClose from '../../atoms/ButtonClose/ButtonClose'

/**
 * SkillCard Component
 */
const SkillCard = ({ index, skillTitle, experience, isTopSkill, onDelete }) => (
  <SkillCard.Container>
    <SkillCard.SiderBar isTopSkill={isTopSkill}>
      <Text color="white">{index}</Text>
    </SkillCard.SiderBar>
    <SkillCard.ContentSection>
      <Text
        fontWeight="semiBold"
        color="primary"
      >
        {skillTitle}
      </Text>
      <SkillCard.ButtonClose>
        <ButtonClose onClick={onDelete} />
      </SkillCard.ButtonClose>
      <Text
        fontWeight="normal"
        color="grey"
        fontSize="sm"
      >
        {experience}
      </Text>
    </SkillCard.ContentSection>
  </SkillCard.Container>
)

export default SkillCard

SkillCard.Container = styled.div`
  position: relative;
  min-width: ${props => props.theme.spacing.xlPlusBase};
  padding-right: ${props => props.theme.spacing.smPlusBasePlusxs};
  min-height: ${props => props.theme.spacing.mdPlusSmPlusXs};
  box-shadow: 0px 2px 18px -4px rgba(0,0,0,0.75);
  background-color: ${props => props.theme.buttonColors.white};
  margin: ${props => props.theme.spacing.xs};
  display: flex;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }

   @media (max-width: 74rem) {
    margin: 0;
    box-shadow: none;
    border: 1px solid ${props => props.theme.buttonColors.grey};
    width: 100%;
  }
`

SkillCard.SiderBar = styled.div`
  width: ${props => props.theme.spacing.sm};
  background-color: ${props =>
    props.isTopSkill ? props.theme.buttonColors.primary
      : props.theme.buttonColors.hover};
  padding-top: ${props => props.theme.spacing.xs};
  display: flex;
  justify-content: center;

   ${SkillCard.Container}:hover & {
    background-color: ${props => props.theme.buttonColors.teal};
  }
`

SkillCard.ButtonClose = styled.div`
  display: none;
  ${SkillCard.Container}:hover & {
    display: block;
  }
`

SkillCard.ContentSection = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: ${props => props.theme.spacing.base};
  justify-content: space-between;
`

SkillCard.propTypes = {
  skillTitle: PropTypes.string,
  index: PropTypes.number,
  experience: PropTypes.string,
  onDelete: PropTypes.func,
  isTopSkill: PropTypes.bool,
}
