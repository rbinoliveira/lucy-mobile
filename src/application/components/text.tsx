import clsx from 'clsx'
import { Text as RNText } from 'react-native'

export function Text(
  props: React.ComponentProps<typeof RNText> & { className?: string },
) {
  return <RNText {...props} className={clsx('font-inter', props.className)} />
}
