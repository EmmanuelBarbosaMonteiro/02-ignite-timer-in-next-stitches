import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  nav: {
    display: 'flex',
    gap: '0.5rem',
  },

  a: {
    width: '3rem',
    height: '3rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: '$gray100',

    borderTop: '3px solid transparent',
    borderBottom: '3px solid transparent',

    '&:hover': {
      borderBottom: '3px solid $green500',
    },
  },

  '.active': {
    color: '$green500',
  },
})
