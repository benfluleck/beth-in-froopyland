import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * ButtonClose Component
 */
const ButtonClose = ({ onClick, position }) => (
  <ButtonClose.Container
    onClick={onClick}
    position={position}>
    ×
  </ButtonClose.Container>
)

ButtonClose.propTypes = {
  onClick: PropTypes.func,
  position: PropTypes.oneOf(['static', 'absolute', 'fixed']),
}

ButtonClose.defaultProps = {
  onClick: () => { },
  position: 'absolute',
}

ButtonClose.Container = styled.div`
  position: ${props => props.position};
  top: ${props => props.theme.spacing.md};
  right: ${props => props.theme.spacing.md};
  width: ${props => props.theme.spacing.md};
  height: ${props => props.theme.spacing.md};
  color: ${props => props.theme.buttonColors.disabledText};
  font-size: ${props => props.theme.fontSize.base};
  text-align: center;
  line-height: ${props => props.theme.spacing.md};
  user-select: none;
  cursor: pointer;
`

export default ButtonClose
