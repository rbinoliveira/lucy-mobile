import FontAwesome from '@expo/vector-icons/FontAwesome'
import { zodResolver } from '@hookform/resolvers/zod'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { TextInput, View } from 'react-native'

import { Button } from '@/application/components/button'
import { InputText } from '@/application/components/text-input'
import {
  LoginFormSchema,
  loginFormSchema,
} from '@/application/screens/login/schemas/login-form.schema'

export function LoginForm() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginFormSchema),
  })

  const router = useRouter()

  const passwordRef = useRef<TextInput | null>(null)

  function onSubmit(data: LoginFormSchema) {
    console.log(data)
  }

  return (
    <View className="w-full">
      <InputText
        control={control}
        name="email"
        placeholder="seuemail@exemplo.com"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
        label="E-mail"
        labelDescription="Seu endereço de email"
        labelIcon={<FontAwesome name={'envelope'} size={14} color={'white'} />}
        className="mb-4"
      />
      <InputText
        ref={passwordRef}
        control={control}
        name="password"
        placeholder="Digite sua senha"
        secureTextEntry
        onSubmitEditing={handleSubmit(onSubmit)}
        label="Senha"
        labelDescription="Digite sua senha"
        labelIcon={<FontAwesome name={'lock'} size={14} color={'white'} />}
        className="mb-[0.625rem]"
      />
      <Button
        onPress={() => router.push('/recover-password')}
        className="self-end mb-[1.125rem]"
        label="Esqueceu a senha?"
        variant="ghost"
        labelClassName="text-primary text-xs font-inter-medium"
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        label="Entrar"
        variant="login"
        icon={
          <Image
            source={require('../../../assets/icons/login.svg')}
            alt=""
            style={{ width: 16, height: 16 }}
          />
        }
      />
    </View>
  )
}
