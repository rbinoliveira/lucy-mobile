import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { ScreenLayout } from '@/application/components/screen-layout'
import { SearchInput } from '@/application/components/search-input'
import { TechniqueListItem } from '@/application/components/technique-list-item'
import { techniques } from '@/application/constants/techniques'
import { normalizeText } from '@/application/helpers/normalize-text'
import theme from '@/application/styles/theme'

const Title = styled.Text`
  color: ${theme.COLORS.TEXT_PRIMARY};
  font-size: ${theme.FONT_SIZE.XXL}px;
  font-family: ${theme.FONT_FAMILY.MEDIUM};
  line-height: 43px;
  margin-bottom: 4px;
`

const SubTitle = styled.Text`
  color: ${theme.COLORS.TEXT_TERTIARY};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  line-height: 27px;
  margin-bottom: 24px;
`

const ListTitle = styled.Text`
  color: ${theme.COLORS.TEXT_PRIMARY};
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.MEDIUM};
  line-height: 32px;
  margin-bottom: 22px;
  margin-top: 36px;
`

export default function Home() {
  const [search, setSearch] = useState('')
  const [filteredTechniques, setFilteredTechniques] = useState(techniques)

  useEffect(() => {
    const normalizedSearch = normalizeText(search)

    setFilteredTechniques(
      techniques.filter((technique) => {
        return (
          normalizeText(technique.name).includes(normalizedSearch) ||
          normalizeText(technique.summary).includes(normalizedSearch) ||
          normalizeText(technique.definition).includes(normalizedSearch) ||
          normalizeText(technique.objective).includes(normalizedSearch) ||
          (technique.indication &&
            normalizeText(technique.indication).includes(normalizedSearch)) ||
          normalizeText(technique.description).includes(normalizedSearch) ||
          (technique.precaution &&
            normalizeText(technique.precaution).includes(normalizedSearch)) ||
          normalizeText(technique.example).includes(normalizedSearch)
        )
      }),
    )
  }, [search])

  return (
    <ScreenLayout>
      <Title>LPA Help</Title>
      <SubTitle>Explore suas técnicas favoritas</SubTitle>
      <SearchInput value={search} onChange={setSearch} />
      <ListTitle>Técnicas</ListTitle>
      <FlatList
        data={filteredTechniques}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TechniqueListItem
            image={item.images[0]}
            name={item.name}
            summary={item.summary}
          />
        )}
      />
    </ScreenLayout>
  )
}
