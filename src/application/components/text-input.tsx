import Feather from '@expo/vector-icons/Feather'
import clsx from 'clsx'
import React, { forwardRef, JSX, useState } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

type InputTextProps<T extends FieldValues> = {
  name: Path<T>
  control: Control<T>
  placeholder: string
  secureTextEntry?: boolean
  keyboardType?: 'default' | 'email-address'
  ref?: React.RefObject<TextInput | null>
  returnKeyType?: 'next' | 'done'
  onSubmitEditing?: () => void
}

function InputTextComponent<T extends FieldValues>(
  {
    name,
    control,
    placeholder,
    secureTextEntry = false,
    keyboardType = 'default',
    returnKeyType = 'done',
    onSubmitEditing,
  }: InputTextProps<T>,
  ref: React.ForwardedRef<TextInput>,
) {
  const [hidden, setHidden] = useState(secureTextEntry)
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View className="mb-4">
          <View
            className={clsx(
              'flex-row items-center border border-border bg-white rounded-xl px-4',
              'h-[58px] border-2',
              error && 'border-red-500',
              isFocused && 'border-primary',
            )}
          >
            <TextInput
              className="flex-1 text-lg py-[0.625rem]"
              placeholder={placeholder}
              placeholderTextColor="#9ca3af"
              onBlur={() => {
                onBlur()
                setIsFocused(false)
              }}
              onFocus={() => setIsFocused(true)}
              onChangeText={onChange}
              value={value}
              keyboardType={keyboardType}
              autoCapitalize={name === 'email' ? 'none' : undefined}
              ref={ref}
              returnKeyType={returnKeyType}
              onSubmitEditing={onSubmitEditing}
              secureTextEntry={hidden}
            />

            {secureTextEntry && (
              <TouchableOpacity onPress={() => setHidden(!hidden)}>
                {hidden ? (
                  <Feather name="eye" size={20} color="#6b7280" />
                ) : (
                  <Feather name="eye-off" size={20} color="#6b7280" />
                )}
              </TouchableOpacity>
            )}
          </View>

          {error && (
            <Text className="text-red-500 mt-2 text-xs">{error.message}</Text>
          )}
        </View>
      )}
    />
  )
}

export const InputText = forwardRef(InputTextComponent) as <
  T extends FieldValues,
>(
  props: InputTextProps<T> & { ref?: React.ForwardedRef<TextInput> },
) => JSX.Element
