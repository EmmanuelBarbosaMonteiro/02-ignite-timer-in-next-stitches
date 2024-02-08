import { styled } from '@/styles'

export const HistoryContainer = styled('main', {
  flex: '1',
  padding: '3.5rem',

  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '1.5rem',
    color: '$gray100',
  },
})

export const HistoryList = styled('div', {
  flex: '1',
  overflow: 'auto',
  marginTop: '2rem',

  table: {
    width: '100%',
    borderCollapse: 'collapse',
    minWidth: '600px',
  },

  th: {
    backgroundColor: '$gray600',
    padding: '1rem',
    textAlign: 'left',
    color: '$gray100',
    fontSize: '0.875rem',
    lineHeight: '1.6',

    '&:first-child': {
      borderTopLeftRadius: '8px',
      paddingLeft: '1.5rem',
    },

    '&:last-child': {
      borderTopRightRadius: '8px',
      paddingRight: '1.5rem',
    },
  },

  td: {
    backgroundColor: '$gray700',
    borderTop: '4px solid $gray800',
    padding: '1rem',
    fontSize: '0.875rem',
    lineHeight: '1.6',

    '&:first-child': {
      width: '50%',
      paddingLeft: '1.5rem',
    },

    '&:last-child': {
      paddingRight: '1.5rem',
    },
  },
})

const STATUS_COLORS = {
  yellow: '$yellow500',
  green: '$green500',
  red: '$red500',
} as const

export const Status = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  '&::before': {
    content: '',
    width: '0.5rem',
    height: '0.5rem',
    borderRadius: '9999px',
    background: 'unset',
  },

  variants: {
    statusColor: {
      yellow: {
        '&::before': { background: STATUS_COLORS.yellow },
      },
      green: {
        '&::before': { background: STATUS_COLORS.green },
      },
      red: {
        '&::before': { background: STATUS_COLORS.red },
      },
    },
  },
})
