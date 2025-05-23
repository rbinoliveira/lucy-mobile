import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'

import theme from '@/application/styles/theme/index'

export const Container = styled(SafeAreaView)<{ paddingBottom?: number }>`
  flex: 1;
  padding: 20px;
  background-color: ${theme.COLORS.BACKGROUND};
`

type ScreenLayoutProps = {
  children: React.ReactNode
  paddingBottom?: number
}

export function ScreenLayout({
  children,
  paddingBottom = 10,
}: ScreenLayoutProps) {
  return (
    <Container edges={['top', 'bottom']} paddingBottom={paddingBottom}>
      {children}
    </Container>
  )
}
