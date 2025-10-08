import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Image } from 'expo-image'
import { View } from 'react-native'

import { Text } from '@/application/components/text'

export function SupportCard() {
  return (
    <View className="mt-8 p-[0.8125rem] rounded-lg gap-2 flex-row items-start bg-primary-light border border-border-two w-full">
      <View className="bg-primary rounded-full w-6 h-6 justify-center items-center">
        <FontAwesome name="question" size={12} color="#ffffff" />
      </View>
      <View>
        <Text className="text-sm font-inter-semibold leading-[1.42] mb-1">
          Precisa de ajuda?
        </Text>
        <Text className="text-xs text-text-six leading-[1.33] mb-[0.875rem]">
          Entre em contato com seu dentista ou com a clínica.
        </Text>
        <View className="flex-row items-center gap-1">
          <Image
            source={require('../assets/icons/phone.svg')}
            alt=""
            style={{ width: 12, height: 12 }}
          />
          <Text className="text-xs font-inter-medium text-primary leading-[1.33]">
            Falar com suporte
          </Text>
        </View>
      </View>
    </View>
  )
}
