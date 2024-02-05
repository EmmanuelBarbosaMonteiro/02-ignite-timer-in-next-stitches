import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import React from 'react'
import { getCssText } from '@/styles'
import { globalStyles } from '@/styles/global'

export const metadata: Metadata = {
  title: 'Ignite Timer',
  description: 'Pomodoro app',
}

const robotoFont = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
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
        {children}

        <style
          dangerouslySetInnerHTML={{
            __html: `${getCssText()} ${globalStyles()}`,
          }}
        />
      </body>
    </html>
  )
}
