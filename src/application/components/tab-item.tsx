import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { Text, View } from 'react-native'

type TabItemProps = {
  focused: boolean
  title: 'Início' | 'Créditos' | 'Salvos'
}

export function TabItem({ focused, title }: TabItemProps) {
  return (
    <View>
      <Feather
        size={20}
        name={
          title === 'Início'
            ? 'home'
            : title === 'Créditos'
              ? 'info'
              : 'bookmark'
        }
      />
      {focused && <Text>{title}</Text>}
    </View>
  )
}
