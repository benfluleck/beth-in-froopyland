import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * Text Component for Text and Titles
 */
const Text = ({
  fontSize,
  textAlign,
  color,
  display,
  uppercase,
  fontWeight,
  children,
}) => (
    <Text.Container
      fontSize={fontSize}
      textAlign={textAlign}
      color={color}
      display={display}
      uppercase={uppercase}
      fontWeight={fontWeight}
    >
      {children}
    </Text.Container>
  )

Text.propTypes = {
  children: PropTypes.string.isRequired,
  display: PropTypes.oneOf(['block', 'inline', 'inline-block', 'none']),
  color: PropTypes.string,
  fontSize: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  uppercase: PropTypes.bool,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Text.defaultProps = {
  display: 'inline',
  uppercase: false,
  fontWeight: 'normal',
}

Text.Container = styled.span`
  text-align: ${props => props.textAlign};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  display: ${props => props.display};
  font-weight: ${props => props.fontWeight};
  ${props => props.uppercase && 'text-transform: uppercase'};
`

export default Text

