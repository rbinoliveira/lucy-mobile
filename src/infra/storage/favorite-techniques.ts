import AsyncStorage from '@react-native-async-storage/async-storage'

import { Technique } from '@/application/constants/techniques'

const FAVORITE_TECHNIQUES_KEY = 'favorite_techniques'

export const addFavorite = async (technique: Technique) => {
  const stored = await AsyncStorage.getItem(FAVORITE_TECHNIQUES_KEY)
  const favorites: Technique[] = stored ? JSON.parse(stored) : []

  const exists = favorites.some((t) => t.name === technique.name)
  if (!exists) {
    favorites.push(technique)
    await AsyncStorage.setItem(
      FAVORITE_TECHNIQUES_KEY,
      JSON.stringify(favorites),
    )
  }
}

export const removeFavorite = async (name: string) => {
  const stored = await AsyncStorage.getItem(FAVORITE_TECHNIQUES_KEY)
  const favorites: Technique[] = stored ? JSON.parse(stored) : []

  const updated = favorites.filter((t) => t.name !== name)
  await AsyncStorage.setItem(FAVORITE_TECHNIQUES_KEY, JSON.stringify(updated))
}

export const isFavorite = async (name: string): Promise<boolean> => {
  const stored = await AsyncStorage.getItem(FAVORITE_TECHNIQUES_KEY)
  const favorites: Technique[] = stored ? JSON.parse(stored) : []

  return favorites.some((t) => t.name === name)
}

export const listFavorites = async (): Promise<Technique[]> => {
  const stored = await AsyncStorage.getItem(FAVORITE_TECHNIQUES_KEY)
  return stored ? JSON.parse(stored) : []
}
