import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

/**
 * @description - Spin Loader is used for the transition why we wait for items
 *
 * @returns {JSX} - Spin Loader Component
 *
 */
const SpinLoader = () => (
  <SpinLoader.Container>
    <Loader type="TailSpin" color="#3c414d" height={100} width={100} />
  </SpinLoader.Container>
)

SpinLoader.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.theme.spacing.smPlusBasePlusxs};
`

export default SpinLoader
