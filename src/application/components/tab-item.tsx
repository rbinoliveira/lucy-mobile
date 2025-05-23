import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import styled from 'styled-components/native'

import theme from '@/application/styles/theme'

export const Container = styled.View<{ focused: boolean }>`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  width: ${({ focused }) => (focused ? 64 : 20)}px;
`

export const TabLabel = styled.Text`
  color: ${theme.COLORS.PRIMARY};
  margin-top: 3px;
  font-family: ${theme.FONT_FAMILY.MEDIUM};
  font-size: ${theme.FONT_SIZE.XS}px;
  line-height: 23px;
`

type TabItemProps = {
  focused: boolean
  title: 'Início' | 'Créditos' | 'Salvos'
}

export function TabItem({ focused, title }: TabItemProps) {
  return (
    <Container focused={focused}>
      <Feather
        size={20}
        name={
          title === 'Início'
            ? 'home'
            : title === 'Créditos'
              ? 'info'
              : 'bookmark'
        }
        color={focused ? theme.COLORS.PRIMARY : theme.COLORS.TEXT_SECONDARY}
      />
      {focused && <TabLabel>{title}</TabLabel>}
    </Container>
  )
}
