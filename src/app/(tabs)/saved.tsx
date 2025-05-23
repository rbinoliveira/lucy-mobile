import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { ScreenLayout } from '@/application/components/screen-layout'
import { TechniqueListItem } from '@/application/components/technique-list-item'
import { Technique } from '@/application/constants/techniques'
import theme from '@/application/styles/theme'
import { listFavorites } from '@/infra/storage/favorite-techniques'

const ListTitle = styled.Text`
  color: ${theme.COLORS.TEXT_PRIMARY};
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.MEDIUM};
  line-height: 32px;
  margin-bottom: 22px;
`

export const EmptyMessage = styled.Text`
  color: ${theme.COLORS.TEXT_SECONDARY};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  line-height: 27px;
  margin-bottom: 22px;
`

export default function Home() {
  const [tecniques, setTecniques] = useState<Technique[]>([])

  useFocusEffect(
    useCallback(() => {
      async function getFavorites() {
        const favs = await listFavorites()
        setTecniques(favs)
      }
      getFavorites()
    }, []),
  )

  return (
    <ScreenLayout>
      <ListTitle>Itens Salvos</ListTitle>
      {tecniques.length > 0 ? (
        <FlatList
          data={tecniques}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TechniqueListItem
              image={item.images[0]}
              name={item.name}
              summary={item.summary}
            />
          )}
        />
      ) : (
        <EmptyMessage>Não há items salvos para exibir.</EmptyMessage>
      )}
    </ScreenLayout>
  )
}
