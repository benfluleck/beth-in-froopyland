import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fontWeight, fontSize } from '../../../../styles/variables/fonts'
import { textColors } from '../../../../styles/variables/colorPalette'

/**
 * @description - Text Component
 *
 * @prop {string} fontSize - font Size
 * @prop {string} textAlign - text Align
 * @prop {string} color - color
 * @prop {string} display - display
 * @prop {bool} uppercase - upperCase
 * @prop {string} fontWeight - fontWeight
 * @prop {children} children- children
 *
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
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  display: PropTypes.oneOf(['block', 'inline', 'inline-block', 'none']),
  color: PropTypes.oneOf(Object.keys(textColors)),
  fontSize: PropTypes.oneOf(Object.keys(fontSize)),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  uppercase: PropTypes.bool,
  fontWeight: PropTypes.oneOf(Object.keys(fontWeight)),
}

Text.defaultProps = {
  display: 'inline',
  uppercase: false,
  fontWeight: 'normal',
}

Text.Container = styled.span`
  text-align: ${props => props.textAlign};
  color: ${props => props.theme.textColors[props.color]};
  font-size: ${props => props.theme.fontSize[props.fontSize]};
  display: ${props => props.display};
  font-weight: ${props => props.theme.fontWeight[props.fontWeight]};
  ${props => props.uppercase && 'text-transform: uppercase'};
`

export default Text
