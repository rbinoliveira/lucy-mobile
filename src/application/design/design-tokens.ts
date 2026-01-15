export const StatusColors = {
  success: {
    background: '#D1FAE5',
    text: '#065F46',
    border: '#10B981',
    button: '#10B981',
    buttonText: '#FFFFFF',
  },
  warning: {
    background: '#FEF3C7',
    text: '#92400E',
    border: '#F59E0B',
    button: '#F59E0B',
    buttonText: '#FFFFFF',
  },
  danger: {
    background: '#FEE2E2',
    text: '#991B1B',
    border: '#EF4444',
    button: '#EF4444',
    buttonText: '#FFFFFF',
  },
  waiting: {
    background: '#F3F4F6',
    text: '#374151',
    border: '#9CA3AF',
    button: '#9CA3AF',
    buttonText: '#FFFFFF',
  },
  info: {
    background: '#DBEAFE',
    text: '#1E40AF',
    border: '#3B82F6',
    button: '#3B82F6',
    buttonText: '#FFFFFF',
  },
} as const

export const TextContrast = {
  high: {
    primary: '#1F2937',
    secondary: '#4B5563',
    tertiary: '#6B7280',
  },
  medium: {
    primary: '#374151',
    secondary: '#6B7280',
    tertiary: '#9CA3AF',
  },
  background: {
    light: '#FFFFFF',
    medium: '#F9FAFB',
    dark: '#F3F4F6',
  },
} as const

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const

export const IconSizes = {
  small: 16,
  medium: 24,
  large: 32,
  xlarge: 48,
} as const

export const CardSpacing = {
  padding: Spacing.md,
  gap: Spacing.md,
  borderRadius: 16,
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
} as const

export const ScrollViewPadding = {
  bottom: 100,
  top: 20,
} as const

export const BUTTON_MIN_HEIGHT = {
  minHeight: 52,
} as const

export const STEP_NUMBER_SIZE = {
  width: 24,
  height: 24,
} as const
