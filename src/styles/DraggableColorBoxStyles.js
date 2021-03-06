import sizes from './sizes'

export default {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginBottom: '-5px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)'
    },
    [sizes.down('md')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down('sm')]: {
      width: '50%',
      height: '10%'
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '5%'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0',
    bottom: '0',
    padding: '10px',
    color: 'rgba(0, 0, 0, 0.5)',
    letterSpacing: '1px',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out'
  }
}
