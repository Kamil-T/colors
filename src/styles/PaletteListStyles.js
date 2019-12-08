import sizes from './sizes'
import background from './background.svg'

export default {
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'scroll',
    /* background by SVGBackgrounds.com */
    backgroundColor: '#253bb3',
    backgroundImage: `url(${background})`
  },
  container: {
    width: '55%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    [sizes.down('md')]: {
      width: '65%'
    },
    [sizes.down('xs')]: {
      width: '75%'
    }
  },
  nav: {
    color: 'white',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& h1': {
      fontSize: '2rem'
    },
    '& a': {
      color: 'white'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2.5rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
      gridGap: '2rem'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1.5rem'
    }
  }
}
