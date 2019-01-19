import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { spacing } from '../../../../styles/variables/spacing'

/**
 * TextInput Component
 */
const TextInput = ({
  value,
  placeholder,
  isError,
  onChange,
  inputWidth,
}) => (
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
  padding: ${props => props.theme.spacing.basePlusXs} ${props => props.theme.spacing.basePlusXs};
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
  ${props =>
    props.isError &&
    TextInput.errorStyles(
    )}
`

TextInput.placeholderColor = css`
  transition: color 0.4s;
  color: #BDBDBD;
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
  onChange: () => { },
}

export default TextInput
