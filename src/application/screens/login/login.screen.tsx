import React from 'react'
import { Text } from 'react-native'

import GoogleButton from '@/application/components/google-button'
import ScreenWrapper from '@/application/components/screen-wrapper'
import { Text as TextComponent } from '@/application/components/text'
import { useAuth } from '@/application/hooks/auth'
import { LoginForm } from '@/application/screens/login/components/login-form'

export function LoginScreen() {
  const { signInWithGoogle } = useAuth()

  return (
    <ScreenWrapper>
      <TextComponent className="text-2xl">Login</TextComponent>
      <Text className="text-2xl">Login</Text>
      <LoginForm />
      <GoogleButton onPress={() => signInWithGoogle()} />
    </ScreenWrapper>
  )
}
