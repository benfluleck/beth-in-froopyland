import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SelectOption from '../../atoms/SelectOption/SelectOption'
/**
 * @description - DropDown Menu component
 *
 * @prop {func} onChange - onChange event
 * @prop {array} items - name, value
 *
 * @returns {JSX} - DropDownMEn Component
 */
const DropDownMenu = ({ items, onChange }) => {
  const renderSelectOptions = items.map((item, index) => (
    <SelectOption
      key={`${index}+${item.name}`}
      name={item.name}
      value={item.value}
    />
  ))

  return (
    <DropDownMenu.OuterContainer onChange={onChange}>
      <DropDownMenu.Container>
        <SelectOption name="Experience" value="Experience" />
        {renderSelectOptions}
      </DropDownMenu.Container>
    </DropDownMenu.OuterContainer>
  )
}

export default DropDownMenu

DropDownMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  onChange: PropTypes.func,
}

DropDownMenu.Container = styled.select`
  border: none;
  background: transparent;
  font-size: ${props => props.theme.fontSize.base};
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 ${props => props.theme.spacing.base};
  cursor: pointer;
  appearance: none;

  &:focus {
    outline: none;
  }
`

DropDownMenu.OuterContainer = styled.div`
  border: 1px solid ${props => props.theme.buttonColors.primary};
  position: relative;
  display: block;
  width: 30%;
  line-height: 3;
  overflow: hidden;
  border-radius: ${props => props.theme.spacing.xxs};

  &:after {
    content: '\\25BC';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0 1em;
    pointer-events: none;
  }

  @media (max-width: 74rem) {
    width: 70%;
  }
`
