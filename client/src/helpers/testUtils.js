import React from 'react'
import renderer from 'react-test-renderer'
import ThemeWrapper from '../styles/ThemeWrapper/themeWrapper'

export function renderWithTheme (children) {
  const tree = renderer
    .create(<ThemeWrapper>{children}</ThemeWrapper>)
    .toJSON()
  return tree
}
