import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import React from 'react'
import { getCssText } from '@/styles'
import { globalStyles } from '@/styles/global'
import { Header } from '@/components/header/Header'
import { LayoutContainer } from './styles'

export const metadata: Metadata = {
  title: 'Ignite Timer',
  description: 'Pomodoro app',
}

const robotoFont = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  style: 'normal',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${robotoFont.variable}`}>
      <body>
        <style
          dangerouslySetInnerHTML={{
            __html: `${getCssText()} ${globalStyles()}`,
          }}
        />

        <LayoutContainer>
          <Header />
          {children}
        </LayoutContainer>
      </body>
    </html>
  )
}
