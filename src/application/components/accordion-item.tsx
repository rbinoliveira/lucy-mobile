import Feather from '@expo/vector-icons/Feather'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import styled from 'styled-components/native'

import theme from '@/application/styles/theme'

const Container = styled.View`
  overflow: hidden;
`

const Header = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
`

const HeaderText = styled.Text`
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.MEDIUM};
  color: ${theme.COLORS.TEXT_PRIMARY};
  line-height: 24px;
`

const HeaderIcon = styled.Text``

const AnimatedContent = styled(Animated.View)`
  overflow: hidden;
`

const ContentWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 8px;
`

const Description = styled.Text`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.XS}px;
  color: ${theme.COLORS.TEXT_SECONDARY};
  line-height: 26px;
`

type AccordionProps = {
  title: string
  description: string | ReactNode
  initialExpanded?: boolean
}

export function AccordionItem({
  description,
  title,
  initialExpanded = true,
}: AccordionProps) {
  const [expanded, setExpanded] = useState(initialExpanded)
  const contentHeight = useRef(0)
  const height = useSharedValue(initialExpanded ? contentHeight.current : 0)
  const [isHeightMeasured, setIsHeightMeasured] = useState(false)

  const toggleAccordion = () => {
    setExpanded((prev) => !prev)
  }

  useEffect(() => {
    if (isHeightMeasured) {
      height.value = withTiming(expanded ? contentHeight.current : 0, {
        duration: 300,
      })
    } else if (expanded && contentHeight.current > 0) {
      height.value = contentHeight.current
    }
  }, [expanded, height, isHeightMeasured])

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
  }))

  return (
    <Container>
      <Header onPress={toggleAccordion} activeOpacity={0.7}>
        <HeaderText>{title}</HeaderText>
        <HeaderIcon>
          {expanded ? (
            <Feather
              name="chevron-up"
              size={24}
              color={theme.COLORS.TEXT_PRIMARY}
            />
          ) : (
            <Feather
              name="chevron-down"
              size={24}
              color={theme.COLORS.TEXT_PRIMARY}
            />
          )}
        </HeaderIcon>
      </Header>

      <AnimatedContent style={animatedStyle}>
        <ContentWrapper
          onLayout={(event) => {
            const measuredHeight = event.nativeEvent.layout.height
            if (
              measuredHeight > 0 &&
              contentHeight.current !== measuredHeight
            ) {
              contentHeight.current = measuredHeight
              setIsHeightMeasured(true)
              if (expanded) {
                height.value = measuredHeight
              }
            }
          }}
        >
          <Description>{description}</Description>
        </ContentWrapper>
      </AnimatedContent>
    </Container>
  )
}
