import { styled } from '@/styles'

export const LayoutContainer = styled('div', {
  maxWidth: '74rem',
  height: 'calc(100vh - 10rem)',
  margin: '5rem auto',
  padding: '2.5rem',

  background: '$gray800',
  borderRadius: '1.5rem',

  display: 'flex',
  flexDirection: 'column',
})
