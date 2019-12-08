import sizes from './sizes'

export default {
  Palette: {
    height: '98vh',
    display: 'flex',
    flexDirection: 'column'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    width: '20%',
    height: '50%',
    display: 'inline-block',
    position: 'relative',
    textTransform: 'uppercase',
    backgroundColor: 'black',
    [sizes.down('sm')]: {
      height: '20%',
      width: '50%'
    },
    [sizes.down('xs')]: {
      height: '10%',
      width: '100%'
    }
  },
  backBtn: {
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none'
  }
}
