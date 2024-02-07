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

export const FormContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  color: '$gray100',
  fontSize: '1,125rem',
  fontWeight: 'bold',
  flexWrap: 'wrap',
})

const BaseInput = styled('input', {
  background: 'transparent',
  height: '2.5rem',
  border: 0,
  borderBottom: '2px solid $gray500',
  fontWeight: 'bold',
  fontSize: '1.125rem',
  padding: '0 0.5rem',
  color: '$gray100',

  '&:focus': {
    boxShadow: 'none',
    borderColor: '$green500',
  },

  '&::placeholder': {
    color: '$gray500',
  },
})

export const TaskInput = styled(BaseInput, {
  flex: '1',
})

export const MinutesAmountInput = styled(BaseInput, {
  width: '4rem',
})

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

export const StartCountdownButton = styled('button', {
  width: '100%',
  border: 0,
  padding: '1rem',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  gap: '0.5rem',
  fontWeight: 'bold',

  cursor: 'pointer',

  background: '$green500',
  color: '$gray100',

  '&:disabled': {
    opacity: '0.7',
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    background: '$green700',
  },
})
