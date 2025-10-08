import React from 'react'

import { Header } from '@/application/components/header'
import ScreenWrapper from '@/application/components/screen-wrapper'
import { SupportCard } from '@/application/components/support-card'
import { RecoverPasswordForm } from '@/application/screens/recover-password/components/recover-password-form'

export function RecoverPasswordScreen() {
  return (
    <>
      <Header
        title="Perdeu sua senha?"
        description="Informe seu e-mail cadastrado para redefinir sua senha."
      />

      <ScreenWrapper
        statusBarStyle="light"
        hasSafeArea={false}
        className="py-5"
      >
        <RecoverPasswordForm />
        <SupportCard />
      </ScreenWrapper>
    </>
  )
}
