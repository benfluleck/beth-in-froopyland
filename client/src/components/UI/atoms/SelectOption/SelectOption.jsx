import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
 * Select Option Component
 */
const SelectOption = ({ value, name }) => (
  <SelectOption.Container
    value={value}>
    {name}
  </SelectOption.Container>
)

SelectOption.Container = styled.option``

SelectOption.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
}

export default SelectOption
