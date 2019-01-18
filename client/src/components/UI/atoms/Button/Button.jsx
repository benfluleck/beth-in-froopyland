import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

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
  font-size: 1.4rem;
  padding: 0 ${props => props.padding};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  background: #0F2944;
  color: #FFF;
  height: 3.8rem;
  border-radius: 0.4rem;

  &:hover {
     background-color: #6f7e8e;
     border: 1px solid #6f7E8E;
  }

  &:focus {
      border: 1px solid #0F2944;
      box-shadow: inset 0 0 0 1px black;
      outline: 0;
  }

  ${props => props.disabled &&
    css`
    &:disabled {
      background-color: #E7E9EC;
      color: #D7D6D9;
      border: none;
      box-shadow: none;
    }`}
  }`

Button.propTypes = {
  padding: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  disabled: false,
  padding: '2.6rem',
}

export default Button
