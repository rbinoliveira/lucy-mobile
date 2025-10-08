import { StatusBar } from 'expo-status-bar'
import { ReactNode } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { cn } from '@/application/utils/cn'

type ScreenWrapperProps = {
  children: ReactNode
  justifyContent?: 'center' | 'flex-start' | 'flex-end'
  alignItems?: 'center' | 'flex-start' | 'flex-end'
  className?: string
  hasSafeArea?: boolean
  statusBarStyle?: 'light' | 'auto'
}

export default function ScreenWrapper({
  hasSafeArea = true,
  statusBarStyle = 'auto',
  className,
  ...props
}: ScreenWrapperProps) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className={className}
    >
      <StatusBar style={statusBarStyle} />
      {hasSafeArea ? (
        <SafeAreaView className="flex-1 bg-background">
          <ScreenWrapperScroll {...props} />
        </SafeAreaView>
      ) : (
        <ScreenWrapperScroll {...props} />
      )}
    </KeyboardAvoidingView>
  )
}

export function ScreenWrapperScroll({
  children,
  justifyContent = 'center',
  alignItems = 'center',
}: ScreenWrapperProps) {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent,
        alignItems,
      }}
      className={cn('px-5')}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  )
}
