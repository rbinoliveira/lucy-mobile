import React from 'react'
import { Pressable, Text } from 'react-native'

import ScreenWrapper from '@/application/components/screen-wrapper'
import { useAuth } from '@/application/hooks/auth'

export default function Home() {
  const { logout } = useAuth()

  return (
    <ScreenWrapper>
      <Text>LPA Help</Text>
      <Pressable onPress={() => logout()}>
        <Text className="text-white">Logout</Text>
      </Pressable>
    </ScreenWrapper>
  )
}
