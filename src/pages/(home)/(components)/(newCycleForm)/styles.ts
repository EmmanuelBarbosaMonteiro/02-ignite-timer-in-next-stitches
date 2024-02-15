import { styled } from '@/styles'

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
