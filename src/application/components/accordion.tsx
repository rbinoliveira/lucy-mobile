import React, { ReactNode } from 'react'
import styled from 'styled-components/native'

import { AccordionItem } from '@/application/components/accordion-item'

const Container = styled.View`
  gap: 24px;
  margin-top: 24px;
`

type AccordionProps = {
  items: {
    title: string
    description: string | ReactNode
  }[]
}

export function Accordion({ items }: AccordionProps) {
  return (
    <Container>
      {items.map((item) => (
        <AccordionItem key={item.title} {...item} />
      ))}
    </Container>
  )
}
