import sizes from './sizes'

export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    height: '6vh'
  },
  logo: {
    height: '100%',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
    '& a': {
      textDecoration: 'none',
      color: 'black'
    },
    [sizes.down('xs')]: {
      display: 'none'
    }
  },
  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },
    '& .rc-slider-rail': {
      height: '8px'
    },
    '& .rc-slider-handle, .rc-slider-handle:focus, .rc-slider-handle:active, .rc-slider-handle:hover': {
      backgroundColor: 'green',
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      width: '13px',
      height: '13px',
      marginTop: '-3px'
    },
    [sizes.down('xs')]: {
      width: '200px'
    }
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem'
  }
}
