import FontAwesome from '@expo/vector-icons/FontAwesome'
import { zodResolver } from '@hookform/resolvers/zod'
import { Image } from 'expo-image'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'

import { Button } from '@/application/components/button'
import { InputText } from '@/application/components/text-input'
import { useAuth } from '@/application/hooks/auth'
import {
  RecoverPasswordFormSchema,
  recoverpasswordFormSchema,
} from '@/application/screens/recover-password/schemas/recover-password-form.schema'

export function RecoverPasswordForm() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(recoverpasswordFormSchema),
  })

  const { recoverPassword } = useAuth()

  function onSubmit({ email }: RecoverPasswordFormSchema) {
    recoverPassword(email)
  }

  return (
    <View className="w-full">
      <InputText
        control={control}
        name="email"
        placeholder="seuemail@exemplo.com"
        keyboardType="email-address"
        label="E-mail"
        labelDescription="Seu endereço de email"
        labelIcon={<FontAwesome name={'envelope'} size={14} color={'white'} />}
        className="mb-4"
        onSubmitEditing={handleSubmit(onSubmit)}
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        label="Recuperar"
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
