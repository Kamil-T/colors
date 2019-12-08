import chroma from 'chroma-js'
import sizes from './sizes'

export default {
  ColorBox: {
    width: '20%',
    height: props => (props.showLink ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginBottom: '-5px',
    '&:hover button': {
      opacity: '1',
      transition: '0.5s'
    },
    [sizes.down('md')]: {
      width: props => (props.showLink ? '25%' : '20%'),
      height: props => (props.showLink ? '20%' : '50%')
    },
    [sizes.down('sm')]: {
      width: props => (props.showLink ? '50%' : '50%'),
      height: props => (props.showLink ? '10%' : '20%')
    },
    [sizes.down('xs')]: {
      width: props => (props.showLink ? '100%' : '100%'),
      height: props => (props.showLink ? '5%' : '10%')
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.07
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white'
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08
        ? 'white'
        : 'rgba(0, 0, 0, 0.5)'
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.07
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    top: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px'
  },
  copyBtn: {
    color: props => chroma(props.background).luminance() >= 0.07,
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
    border: 'none',
    textDecoration: 'none',
    opacity: '0'
  },
  boxContent: {
    position: 'absolute',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    fontSize: '12px'
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: ' 100%',
    transition: 'transform 0.6s ease-in-out'
  },
  showOverlay: {
    opacity: '1',
    zIndex: '1',
    transform: 'scale(20)',
    position: 'absolute'
  },
  copyMsg: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    color: 'white',
    opacity: '0',
    transform: 'scale(0.1)',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      [sizes.down('xs')]: {
        fontSize: '5rem'
      }
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '200'
    }
  },
  showMsg: {
    transform: 'scale(1)',
    opacity: '1',
    zIndex: '2',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.2s'
  }
}
