import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { spacing } from '../../../../styles/variables/spacing'

/**
 * @description - Text Input component
 *
 * @prop {string} - placeholder
 * @prop {string | number} - value
 * @prop {bool} - isError
 * @prop {func} - onChange
 * @prop {string} - inputWidth
 *
 * @returns {JSX} - TextInput Component
 *
 * TextInput Component
 */
const TextInput = ({ value, placeholder, isError, onChange, inputWidth }) => (
/** TODO Add Error Message Field and Text or possible a molecule */
  <TextInput.Container
    type="text"
    placeholder={placeholder}
    value={value}
    isError={isError}
    onChange={onChange}
    inputWidth={inputWidth}
  />
)

TextInput.Container = styled.input`
  background-color: transparent;
  outline: none;
  text-align: left;
  width: ${props => props.inputWidth || '100%'};
  border: 1px solid ${props => props.theme.buttonColors.primary};
  transition: border 0.5s;
  font-size: 1.2rem;
  padding: ${props => props.theme.spacing.basePlusXs} ${props =>
  props.theme.spacing.basePlusXs};
  ::-webkit-input-placeholder {
    ${() => TextInput.placeholderColor};
  }
  ::-moz-placeholder {
    ${() => TextInput.placeholderColor};
  }
  :-ms-input-placeholder {
    ${() => TextInput.placeholderColor};
  }
  :-moz-placeholder {
    ${() => TextInput.placeholderColor};
  }
  &:focus {
    ::-webkit-input-placeholder {
      color: transparent;
    }
    :-moz-placeholder {
      color: transparent;
    }
    ::-moz-placeholder {
      color: transparent;
    }
    :-ms-input-placeholder {
      color: transparent;
    }
  }

  ${TextInput.defaultStyles}
  ${props => props.isError && TextInput.errorStyles()}

  @media (max-width: 74rem) {
    margin-bottom: ${props => props.theme.spacing.base};
  }
`

TextInput.placeholderColor = css`
  transition: color 0.4s;
  color: #bdbdbd;
`

TextInput.defaultStyles = () => css`
  &:hover {
    border: 1px solid ${props => props.theme.textColors.black};
  }
  &:focus {
    border: 1px solid ${props => props.theme.textColors.black};
  }
`

TextInput.errorStyles = () => css`
  border: 1px solid ${props => props.theme.textColors.red};
  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.textColors.red};
  }
`
TextInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
  onChange: PropTypes.func,
  inputWidth: PropTypes.oneOf(Object.keys(spacing)),
}

TextInput.defaultProps = {
  type: 'text',
  required: true,
  isError: false,
  onChange: () => {},
}

export default TextInput
