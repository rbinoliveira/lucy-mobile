import 'react-native-reanimated'
import '@/application/styles/globals.css'

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import Toast from 'react-native-toast-message'

import { AuthProvider } from '@/application/hooks/auth'
import { AppRouters } from '@/application/routes'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter_Regular: require('../application/assets/fonts/Inter_Regular.ttf'),
    Inter_Medium: require('../application/assets/fonts/Inter_Medium.ttf'),
    Inter_SemiBold: require('../application/assets/fonts/Inter_SemiBold.ttf'),
    Inter_Bold: require('../application/assets/fonts/Inter_Bold.ttf'),
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
      <StatusBar style="auto" />
      <Toast />
    </AuthProvider>
  )
}
