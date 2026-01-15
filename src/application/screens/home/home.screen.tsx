import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Alert, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'

import { ScrollViewPadding } from '@/application/design/design-tokens'
import { useAuth } from '@/application/hooks/auth'
import { useNotifications } from '@/application/hooks/notifications'
import {
  DailyTipCard,
  GreetingCard,
  HomeHeader,
  NextMedicationCard,
  QuickActionsSection,
  TodayMedicationsSection,
} from '@/application/screens/home/components'
import { Medication } from '@/application/types/medication'
import { updateMedicationStatuses } from '@/application/utils/medication-status'

function getMockMedications(): Medication[] {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  return [
    {
      id: '1',
      name: 'Losartana',
      dose: '50mg',
      form: 'capsula',
      scheduledTime: new Date(today.getTime() + 8 * 60 * 60 * 1000), // 08:00
      instructions: 'Engolir com água, antes do café da manhã',
      status: 'on_time',
    },
    {
      id: '2',
      name: 'Metformina',
      dose: '500mg',
      form: 'comprimido',
      scheduledTime: new Date(today.getTime() + 12 * 60 * 60 * 1000), // 12:00
      instructions: 'Engolir com água, após o almoço',
      status: 'delayed',
      delayMinutes: 20,
    },
    {
      id: '3',
      name: 'Xarope Expectorante',
      dose: '5ml',
      form: 'liquido',
      scheduledTime: new Date(today.getTime() + 22 * 60 * 60 * 1000), // 22:00
      instructions: 'Medir 5ml na seringa, tomar puro',
      status: 'very_delayed',
    },
    {
      id: '4',
      name: 'Pomada Cicatrizante',
      dose: 'Uso tópico',
      form: 'pomada',
      scheduledTime: new Date(today.getTime() + 20 * 60 * 60 * 1000), // 20:00
      instructions: 'Aplicar pequena quantidade no local, massagear suavemente',
      status: 'waiting',
      delayMinutes: 8,
    },
  ]
}

export function HomeScreen() {
  const { user } = useAuth()
  const router = useRouter()
  const { scheduleNotifications } = useNotifications()
  const [takenMedications, setTakenMedications] = useState<
    Record<string, Date>
  >({})

  const baseMedications = useMemo(() => getMockMedications(), [])

  const medications = useMemo(() => {
    const medsWithTaken = baseMedications.map((med) => ({
      ...med,
      takenAt: takenMedications[med.id],
    }))
    return updateMedicationStatuses(medsWithTaken)
  }, [baseMedications, takenMedications])

  const nextMedication = useMemo(() => {
    const now = new Date()
    const upcoming = medications
      .filter((m) => m.scheduledTime > now && !m.takenAt)
      .sort((a, b) => a.scheduledTime.getTime() - b.scheduledTime.getTime())
    return upcoming[0]
  }, [medications])

  useEffect(() => {
    scheduleNotifications(medications)
  }, [medications, scheduleNotifications])

  function handleProfilePress() {
    router.push('/(authenticated)/settings')
  }

  function handleViewMoreTips() {
    router.push('/(authenticated)/tips')
  }

  function handleViewHistory() {
    router.push('/(authenticated)/history')
  }

  function handleViewHelp() {
    router.push('/(authenticated)/doctor')
  }

  const markMedicationAsTaken = useCallback((medication: Medication) => {
    const now = new Date()
    setTakenMedications((prev) => ({
      ...prev,
      [medication.id]: now,
    }))

    const toastType = medication.status === 'very_delayed' ? 'info' : 'success'
    const toastTitle =
      medication.status === 'very_delayed'
        ? 'Remédio tomado com atraso'
        : 'Registrado!'

    Toast.show({
      type: toastType,
      text1: toastTitle,
      text2: `${medication.name} marcado como tomado.`,
    })
  }, [])

  const handleMedicationAction = useCallback(
    (medication: Medication) => {
      if (medication.status === 'waiting') {
        Toast.show({
          type: 'info',
          text1: 'Aguarde o horário',
          text2: 'Ainda não é hora de tomar.',
        })
        return
      }

      if (medication.takenAt) {
        Toast.show({
          type: 'info',
          text1: 'Já registrado',
          text2: 'Este remédio já foi marcado.',
        })
        return
      }

      if (medication.status === 'very_delayed') {
        Alert.alert(
          'Remédio muito atrasado',
          `${medication.name} está muito atrasado.\n\nRecomendamos consultar seu médico antes de tomar.\n\nDeseja marcar como tomado mesmo assim?`,
          [
            {
              text: 'Consultar Médico',
              style: 'cancel',
            },
            {
              text: 'Tomar Agora',
              style: 'destructive',
              onPress: () => markMedicationAsTaken(medication),
            },
          ],
          { cancelable: true },
        )
        return
      }

      markMedicationAsTaken(medication)
    },
    [markMedicationAsTaken],
  )

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar style="dark" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: ScrollViewPadding.bottom }}
      >
        <HomeHeader onProfilePress={handleProfilePress} />
        <GreetingCard userName={user?.name || ''} />
        <NextMedicationCard
          scheduledTime={nextMedication?.scheduledTime}
          medicationName={nextMedication?.name}
        />
        <TodayMedicationsSection
          medications={medications}
          onMedicationAction={handleMedicationAction}
        />
        <DailyTipCard onViewMorePress={handleViewMoreTips} />
        <QuickActionsSection
          onHistoryPress={handleViewHistory}
          onHelpPress={handleViewHelp}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
