import { Image as ExpoImage, ImageProps } from 'expo-image'
import { Link } from 'expo-router'
import React from 'react'
import styled from 'styled-components/native'

import theme from '@/application/styles/theme'

type TechniqueListItemProps = {
  image: string
  name: string
  summary: string
}

const Container = styled.TouchableOpacity<{ isSelected?: boolean }>`
  flex-direction: row;
  align-items: center;
`

const Info = styled.View`
  margin-left: 16px;
  flex: 1;
`

const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.MEDIUM};
  color: ${theme.COLORS.PRIMARY};
  line-height: 24px;
  margin-bottom: 4px;
`

const Summary = styled.Text`
  font-size: ${theme.FONT_SIZE.XS}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.TEXT_TERTIARY};
  line-height: 18px;
`

const Image = styled(ExpoImage)<ImageProps>`
  width: 75px;
  height: 75px;
  border-radius: 16px;
`

export const TechniqueListItem = ({
  image,
  name,
  summary,
}: TechniqueListItemProps) => {
  return (
    <Link
      href={{
        pathname: '/details/[name]',
        params: { name },
      }}
      style={{
        marginBottom: 21,
      }}
      asChild
    >
      <Container activeOpacity={0.7}>
        <Image source={image} alt={name} />
        <Info>
          <Title numberOfLines={1}>{name}</Title>
          <Summary numberOfLines={2}>{summary}</Summary>
        </Info>
      </Container>
    </Link>
  )
}
