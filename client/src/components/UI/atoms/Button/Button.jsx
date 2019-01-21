import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { spacing } from '../../../../styles/variables/spacing'

/**
 * @description - Button Component
 *
 * @prop {string} padding - padding
 * @prop {func} onClick - onClick
 * @prop {bool} disabled - disabled
 *
 * Button Component
 */
const Button = ({ disabled, onClick, children, padding }) => (
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
  font-size: ${props => props.theme.fontSize.sm};
  padding: 0 ${props => props.theme.spacing[props.padding]};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  background: ${props => props.theme.buttonColors.primary};
  color: ${props => props.theme.buttonColors.white};
  border-radius: ${props => props.theme.spacing.xs};

  @media (max-width: 74rem) {
    width: 30%;
    padding: 0;
  }

  &:hover {
    background-color: ${props => props.theme.buttonColors.hover};
    border: 1px solid ${props => props.theme.buttonColors.hover};
  }

  &:focus {
    border: 1px solid ${props => props.theme.buttonColors.black};
    box-shadow: inset 0 0 0 1px ${props => props.theme.buttonColors.black};
    outline: 0;
  }

  ${props =>
    props.disabled &&
    css`
      &:disabled {
        background-color: ${props => props.theme.buttonColors.grey};
        color: ${props => props.theme.buttonColors.disabledText};
        border: none;
        box-shadow: none;
      }
    `}
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
