import { Text as RNText } from 'react-native'

import { cn } from '@/application/utils/cn'

export function Text(
  props: React.ComponentProps<typeof RNText> & { className?: string },
) {
  return (
    <RNText
      {...props}
      className={cn('font-inter text-text-one text-base', props.className)}
    />
  )
}
