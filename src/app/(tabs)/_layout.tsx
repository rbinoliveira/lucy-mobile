import { Tabs } from 'expo-router'

import { TabItem } from '@/application/components/tab-item'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          title: 'Início',
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} title="Início" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarShowLabel: false,
          title: 'Salvos',
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} title="Salvos" />
          ),
        }}
      />
      <Tabs.Screen
        name="credits"
        options={{
          tabBarShowLabel: false,
          title: 'Créditos',
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} title="Créditos" />
          ),
        }}
      />
    </Tabs>
  )
}
