import { CycleContextProvider } from '@/context/CyclesContext'
import { LayoutContainer } from './styles'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <CycleContextProvider>{children}</CycleContextProvider>
    </LayoutContainer>
  )
}
