import { styled } from '@/styles'

export const CountdownContainer = styled('div', {
  fontFamily: 'monospace',
  fontSize: '10rem',
  lineHeight: '8rem',
  color: '$gray100',

  display: 'flex',
  gap: '1rem',

  span: {
    background: '$gray700',
    padding: '2rem 1rem',
    borderRadius: 8,
  },
})

export const Separator = styled('div', {
  padding: '2rem 0',
  color: '$green500',

  width: '4rem',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
})
