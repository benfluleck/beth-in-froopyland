import React from 'react'
import styled from 'styled-components'

import Text from '../../../../UI/atoms/Text/Text'

/**
 * @description - This section displays the header of the app
 *
 * @returns {JSX} - Page Header Section Element
 */
export const PageHeaderSection = () => (
  <PageHeaderSection.Container>
    <Text fontSize="xsMd" fontWeight="semiBold" uppercase={true}>
      Add Skills
    </Text>
  </PageHeaderSection.Container>
)

PageHeaderSection.Container = styled.div`
  padding-bottom: ${props => props.theme.spacing.md};
`
