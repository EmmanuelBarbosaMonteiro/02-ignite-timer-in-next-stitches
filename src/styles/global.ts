import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  ':focus': {
    outline: 0,
    boxShadow: '0 0 0 2px $green500',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray300',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '1rem',
  },
})
