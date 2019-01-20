import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SelectOption from '../../atoms/SelectOption/SelectOption'

const DropDownMenu = ({ items, onChange }) => {
  const renderSelectOptions = items.map((item, index) =>
    <SelectOption
      key={`${index}+${item.name}`}
      name={item.name}
      value={item.value}
    >
    </SelectOption>)

  return (<DropDownMenu.OuterContainer onChange={onChange}>
    <DropDownMenu.Container>
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
  font-size: ${props => props.theme.spacing.sm};
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 ${props => props.theme.spacing.base};
  cursor: pointer;
  appearance: none;

  &:focus {
    outline: none
  }`

DropDownMenu.OuterContainer = styled.div`
  border: 1px solid ${props => props.theme.buttonColors.primary};
  position: relative;
  display: block;
  width: ${props => props.theme.spacing.inputWidth};
  height: ${props => props.theme.spacing.md};
  line-height: 3;
  overflow: hidden;
  border-radius: ${props => props.theme.spacing.xs};;

  &:after {
    content: '\\25BC';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0 1em;
    pointer-events: none;
  }
`
