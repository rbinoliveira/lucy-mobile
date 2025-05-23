import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import styled from 'styled-components/native'

import theme from '@/application/styles/theme'

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${theme.COLORS.INPUT_BACKGROUND};
  padding: 10px 28px;
  border-radius: 999px;
  width: 100%;
`

const SearchInputField = styled.TextInput`
  flex: 1;
  margin-left: 13px;
  color: ${theme.COLORS.TEXT_SECONDARY};
  font-size: ${theme.FONT_SIZE.S}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`

type SearchInputProps = {
  value: string
  onChange: (text: string) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <Container>
      <Feather name="search" size={24} color={theme.COLORS.TEXT_SECONDARY} />
      <SearchInputField
        placeholder="Procurar técnica..."
        placeholderTextColor={theme.COLORS.TEXT_SECONDARY}
        numberOfLines={1}
        value={value}
        onChangeText={onChange}
      />
    </Container>
  )
}
