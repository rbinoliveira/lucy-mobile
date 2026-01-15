import 'react-native-reanimated'
import '@/application/styles/globals.css'

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect } from 'react'
import Toast from 'react-native-toast-message'

import InterBold from '@/application/assets/fonts/Inter_Bold.ttf'
import InterMedium from '@/application/assets/fonts/Inter_Medium.ttf'
import InterRegular from '@/application/assets/fonts/Inter_Regular.ttf'
import InterSemiBold from '@/application/assets/fonts/Inter_SemiBold.ttf'
import { AuthProvider } from '@/application/hooks/auth'
import { AppRouters } from '@/application/routes'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter_Regular: InterRegular,
    Inter_Medium: InterMedium,
    Inter_SemiBold: InterSemiBold,
    Inter_Bold: InterBold,
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <AuthProvider>
      <AppRouters />
      <Toast />
    </AuthProvider>
  )
}
