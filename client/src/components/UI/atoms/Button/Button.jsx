import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { spacing } from '../../../../styles/variables/spacing'

/**
 * Button Component
 */
const Button = ({
  disabled,
  onClick,
  children,
  padding,
}) => (
  <Button.Container
    tabIndex="0"
    padding={padding}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </Button.Container>
)

Button.Container = styled.button`
  display: block;
  font-size: ${props => props.theme.fontSize.base};
  padding: 0 ${props => props.theme.spacing[props.padding]};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  background: ${props => props.theme.buttonColors.primary};
  color: ${props => props.theme.buttonColors.white};
  height: ${props => props.theme.spacing.mdPlusBase};
  border-radius: ${props => props.theme.spacing.xs};

  &:hover {
    background-color: ${props => props.theme.buttonColors.hover};
    border: 1px solid ${props => props.theme.buttonColors.hover};
  }

  &:focus {
    border: 1px solid ${props => props.theme.buttonColors.black};
    box-shadow: inset 0 0 0 1px ${props => props.theme.buttonColors.black};
    outline: 0;
  }

  ${props => props.disabled &&
    css`
    &:disabled {
      background-color: ${props => props.theme.buttonColors.grey};
      color: ${props => props.theme.buttonColors.grey};
      border: none;
      box-shadow: none;
    }`}
  }`

Button.propTypes = {
  padding: PropTypes.oneOf(Object.keys(spacing)),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  disabled: false,
  padding: 'mdPlusXs',
}

export default Button
