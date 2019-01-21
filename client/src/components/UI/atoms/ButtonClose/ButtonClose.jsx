import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * @description- Button Close Component used to Delete
 *
 * @prop {func} onclick - onClick
 * @returns {JSX} - Button Close Component
 *
 * ButtonClose Component
 */
const ButtonClose = ({ onClick }) => (
  <ButtonClose.Container onClick={onClick}>×</ButtonClose.Container>
)

ButtonClose.propTypes = {
  onClick: PropTypes.func,
}

ButtonClose.defaultProps = {
  onClick: () => {},
}

ButtonClose.Container = styled.div`
  position: absolute;
  top: ${props => props.theme.spacing.negativexs};
  right: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.buttonColors.disabledText};
  font-size: ${props => props.theme.fontSize.base};
  text-align: center;
  line-height: ${props => props.theme.spacing.md};
  user-select: none;
  cursor: pointer;
`

export default ButtonClose
