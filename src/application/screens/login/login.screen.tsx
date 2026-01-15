import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet } from 'react-native'

import googleIcon from '@/application/assets/icons/google.svg'
import { Button } from '@/application/components/button'
import { Header } from '@/application/components/header'
import ScreenWrapper from '@/application/components/screen-wrapper'
import { Separator } from '@/application/components/separator'
import { SupportCard } from '@/application/components/support-card'
import { useAuth } from '@/application/hooks/auth'
import { LoginForm } from '@/application/screens/login/components/login-form'

const styles = StyleSheet.create({
  icon: { height: 16, width: 16 },
})

export function LoginScreen() {
  const { signInWithGoogle } = useAuth()

  return (
    <>
      <Header title="Bem-vindo(a)" description="Acesse sua conta" />

      <ScreenWrapper
        statusBarStyle="light"
        hasSafeArea={false}
        className="py-5"
      >
        <LoginForm />
        <Separator label="ou" className="my-4" />
        <Button
          onPress={() => signInWithGoogle()}
          label="Continuar com Google"
          variant="google"
          icon={<Image source={googleIcon} alt="" style={styles.icon} />}
        />
        <SupportCard />
      </ScreenWrapper>
    </>
  )
}
