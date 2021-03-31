import React from 'react'
import GlobalStyles from 'src/global.styles'

import { LayoutProps } from './LayoutTypes'
import { StyledSafeAreaView, StyledContentWrapper } from './LayoutStyles'

const Layout = ({ children }: LayoutProps) => (
  <StyledSafeAreaView style={GlobalStyles.adroidSafeArea}>
    <StyledContentWrapper>
      {children}
    </StyledContentWrapper>
  </StyledSafeAreaView>
)

export default Layout