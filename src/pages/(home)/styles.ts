import { styled } from '@/styles'

export const HomeContainer = styled('main', {
  flex: '1',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3.5rem',
  },
})

export const BaseCountdownButton = styled('button', {
  width: '100%',
  border: 0,
  padding: '1rem',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray100',

  gap: '0.5rem',
  fontWeight: 'bold',

  cursor: 'pointer',

  '&:disabled': {
    opacity: '0.7',
    cursor: 'not-allowed',
  },
})

export const StartCountdownButton = styled(BaseCountdownButton, {
  background: '$green500',

  '&:not(:disabled):hover': {
    background: '$green700',
  },
})

export const StopCountdownButton = styled(BaseCountdownButton, {
  background: '$red500',

  '&:not(:disabled):hover': {
    background: '$red700',
  },
})
