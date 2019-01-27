import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import TextInput from '../../atoms/TextInput/TextInput'
import Text from '../../atoms/Text/Text'

/**
 * @description - InputTextField component combined with an error field
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
const InputTextField = ({
  value,
  placeholder,
  onChange,
  errorMessage,
  showError,
}) => {
  return (

    <InputTextField.InnerContainer>
      <TextInput
        placeholder={placeholder}
        value={value}
        isError={showError && errorMessage !== null}
        onChange={onChange}
      />
      {showError && errorMessage && <Text color="red" fontSize="sm" padding="xxs" >{errorMessage}</Text>}
    </InputTextField.InnerContainer>

  )
}

InputTextField.propTypes = {
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.string,
  errorMessage: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  showError: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

InputTextField.defaultProps = {
  showError: false,
}

InputTextField.InnerContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 45%;

    @media (max-width: 74rem) {
    width: 100%;
  }
`

export default InputTextField
