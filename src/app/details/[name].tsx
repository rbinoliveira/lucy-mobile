import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Image as ExpoImage, ImageProps } from 'expo-image'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  ViewToken,
} from 'react-native'
import Toast from 'react-native-toast-message'
import styled, { css } from 'styled-components/native'

import { Accordion } from '@/application/components/accordion'
import { ScreenLayout } from '@/application/components/screen-layout'
import { techniques } from '@/application/constants/techniques'
import { techniquesMapper } from '@/application/constants/techniques-mapper'
import theme from '@/application/styles/theme'
import {
  addFavorite,
  isFavorite,
  removeFavorite,
} from '@/infra/storage/favorite-techniques'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

const FlatListContainer = styled.View`
  margin-top: 20px;
  height: 300px;
`

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Image = styled(ExpoImage)<ImageProps>`
  width: ${SCREEN_WIDTH - 40}px;
  height: 300px;
  border-radius: 30px;
`

const Pagination = styled.View`
  flex-direction: row;
  gap: 6px;
  margin-top: 20px;
  margin-left: 11px;
`

const Dot = styled.View<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  ${({ active }) =>
    active
      ? css`
          background-color: ${theme.COLORS.PRIMARY};
          width: 26px;
        `
      : css`
          background-color: ${theme.COLORS.DOT};
        `}
`

const Name = styled.Text`
  font-family: ${theme.FONT_FAMILY.MEDIUM};
  font-size: ${theme.FONT_SIZE.XL}px;
  line-height: 32px;
  margin-top: 20px;
`

const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin-top: 12px;
`

const Authors = styled.Text`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.SM}px;
  line-height: 26px;
  color: ${theme.COLORS.TEXT_TERTIARY};
`

const InfoDot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${theme.COLORS.TEXT_TERTIARY};
`

const LectureTime = styled.Text`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.SM}px;
  line-height: 26px;
  color: ${theme.COLORS.TEXT_TERTIARY};
`

const Description = styled.Text`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.XS}px;
  margin-top: 24px;
  color: ${theme.COLORS.TEXT_SECONDARY};
  line-height: 26px;
`

const BookmarkButton = styled.TouchableOpacity`
  margin-right: 11px;
`

export default function Details() {
  const [isFav, setIsFav] = useState(false)

  const router = useRouter()

  const [activeIndex, setActiveIndex] = useState(0)
  const onViewRef = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0)
      }
    },
  )

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

  const { name } = useLocalSearchParams()

  const technique = techniques.find((technique) => technique.name === name)

  useEffect(() => {
    async function checkFavorite() {
      if (!technique?.name) return
      const fav = await isFavorite(technique.name)
      setIsFav(fav)
    }
    checkFavorite()
  }, [technique?.name])

  async function handleFavorite() {
    if (!technique?.name) return

    try {
      if (isFav) {
        setIsFav(false)
        await removeFavorite(technique.name)
        Toast.show({
          type: 'success',
          text1: 'Sucesso!',
          text2: 'A técnica foi removida dos salvos com sucesso.',
          position: 'bottom',
        })
      } else {
        setIsFav(true)
        await addFavorite(technique)
        Toast.show({
          type: 'success',
          text1: 'Sucesso!',
          text2: 'A técnica foi salva com sucesso.',
          position: 'bottom',
        })
      }
    } catch {
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: 'Ocorreu um erro inesperado, tente novamente.',
        position: 'bottom',
      })
    }
  }

  if (!technique) {
    return (
      <ScreenLayout>
        <Text>Técnica não encontrada</Text>
      </ScreenLayout>
    )
  }

  return (
    <ScreenLayout paddingBottom={20}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        <Header>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={24} />
          </TouchableOpacity>
          <BookmarkButton onPress={handleFavorite}>
            <Ionicons
              size={24}
              name={isFav ? 'bookmark' : 'bookmark-outline'}
              color={theme.COLORS.PRIMARY}
            />
          </BookmarkButton>
        </Header>
        <FlatListContainer>
          <FlatList
            data={technique.images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Image source={item} alt="" />}
            onViewableItemsChanged={onViewRef.current}
            viewabilityConfig={viewConfigRef.current}
            bounces={false}
          />
        </FlatListContainer>
        <Pagination>
          {technique.images.map((_, index) => (
            <Dot key={index} active={activeIndex === index} />
          ))}
        </Pagination>

        <Name>{technique.name}</Name>
        <InfoContainer>
          <Authors>Por LPA UFCG</Authors>
          <InfoDot />
          <LectureTime>{technique.lectureTime} minutos</LectureTime>
        </InfoContainer>
        {technique.description && (
          <Description>{technique.description}</Description>
        )}
        <Accordion
          items={Object.entries(technique)
            .filter(
              ([key]) =>
                !['name', 'description', 'images', 'lectureTime'].includes(key),
            )
            .map(([key, value]) => ({
              title: techniquesMapper(key),
              description: String(value),
            }))}
        />
      </ScrollView>
    </ScreenLayout>
  )
}
