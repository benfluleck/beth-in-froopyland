import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TextInput from '../../../../UI/atoms/TextInput/TextInput'
import DropDownMenu from '../../../../UI/molecules/DropDownMenu/DropDownMenu'
import Button from '../../../../UI/atoms/Button/Button'
import exprienceItems from '../../../../../fixtures/experienceItems'

/**
 * @description - This section add skills to the application
 *
 * @prop {string} name - name of skill
 * @prop {string} isError - to display Error border around Text Input
 * @prop {func} onChange - onChange Event of textInput
 * @prop {func} onSelectedChange - Selected Change event of the DropDownMEnu
 */
const AddSkillsSection = ({
  name,
  isError,
  onChange,
  addSkill,
  onSelectedChange,
}) => (
  <AddSkillsSection.Container>
    <TextInput
      value={name}
      onChange={onChange}
      isError={isError}
      placeholder="Node Js, Postgres, React etc"
    />
    <DropDownMenu items={exprienceItems} onChange={onSelectedChange} />
    <Button onClick={addSkill}>ADD SKILLS</Button>
  </AddSkillsSection.Container>
)

export default AddSkillsSection

AddSkillsSection.Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

AddSkillsSection.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  addSkill: PropTypes.func,
  isError: PropTypes.bool,
  onSelectedChange: PropTypes.func,
}
