import theme from '@/application/styles/theme'
import { ThemeProvider } from 'styled-components/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import 'react-native-reanimated'
import Toast from 'react-native-toast-message'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins_400Regular: require('../application/assets/fonts/Poppins-Regular.ttf'),
    Poppins_600SemiBold: require('../application/assets/fonts/Poppins-SemiBold.ttf'),
    Poppins_500Medium: require('../application/assets/fonts/Poppins-Medium.ttf'),
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
    <ThemeProvider theme={theme}>
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarStyle: 'dark',
          statusBarTranslucent: true,
          statusBarAnimation: 'fade',
          statusBarHidden: false,
          statusBarBackgroundColor: theme.COLORS.BACKGROUND,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
      <Toast />
    </ThemeProvider>
  )
}
