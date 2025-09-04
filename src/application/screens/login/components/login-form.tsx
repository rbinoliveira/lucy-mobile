import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Pressable, Text, TextInput, View } from 'react-native'

import { InputText } from '@/application/components/text-input'
import {
  LoginFormSchema,
  loginFormSchema,
} from '@/application/screens/login/schemas/login-form.schema'

export function LoginForm() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginFormSchema),
  })

  const passwordRef = useRef<TextInput | null>(null)

  function onSubmit(data: LoginFormSchema) {
    console.log(data)
  }

  return (
    <View className="w-full">
      <InputText
        control={control}
        name="email"
        placeholder="Email"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
      />
      <InputText
        ref={passwordRef}
        control={control}
        name="password"
        placeholder="Senha"
        secureTextEntry
        onSubmitEditing={handleSubmit(onSubmit)}
      />
      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text>Entrar</Text>
      </Pressable>
    </View>
  )
}
