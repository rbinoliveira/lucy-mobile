import { Image as ExpoImage, ImageProps } from 'expo-image'
import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import styled from 'styled-components/native'

import { Accordion } from '@/application/components/accordion'
import { ScreenLayout } from '@/application/components/screen-layout'
import { autors, references } from '@/application/constants/credits'
import theme from '@/application/styles/theme'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

const Image = styled(ExpoImage)<ImageProps>`
  width: ${SCREEN_WIDTH - 40}px;
  height: 300px;
  border-radius: 30px;
`

const Description = styled.Text`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.XS}px;
  margin-top: 32px;
  color: ${theme.COLORS.TEXT_SECONDARY};
  line-height: 26px;
`

const InfoContainer = styled.View``

const InfoName = styled.Text`
  font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${theme.FONT_SIZE.XS}px;
  color: ${theme.COLORS.TEXT_SECONDARY};
  margin-top: 5px;
`

const InfoDescription = styled.Text`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.XS}px;
  color: ${theme.COLORS.TEXT_SECONDARY};
`

export default function Details() {
  return (
    <ScreenLayout paddingBottom={20}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        <Image
          source={require('../../application/assets/imgs/splash-icon.png')}
          alt="Logo da LPA Help"
        />
        <Description>
          Conheça o LPA Help, uma solução inovadora especialmente desenvolvida
          para odontólogos que buscam aprimorar suas técnicas em
          odontopediatria.
        </Description>
        <Accordion
          items={[
            { title: 'Autores', description: <Autors /> },
            { title: 'Referências', description: <References /> },
          ]}
        />
      </ScrollView>
    </ScreenLayout>
  )
}

function Autors() {
  return (
    <>
      {autors.map((autor) => (
        <InfoContainer key={autor}>
          <InfoName>{autor.split(' - ')[0]}</InfoName>
          <InfoDescription>{autor.split(' - ')[1]}</InfoDescription>
        </InfoContainer>
      ))}
    </>
  )
}

function References() {
  return (
    <>
      {references.map((reference) => (
        <InfoContainer key={reference}>
          <InfoDescription>{reference}</InfoDescription>
        </InfoContainer>
      ))}
    </>
  )
}
