import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ColorBox.css'
import { withStyles } from '@material-ui/styles'
import chroma from 'chroma-js'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const isLightColor = background => chroma(background).luminance() >= 0.07

const styles = {
  ColorBox: {
    width: '20%',
    height: props => (props.showLink ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginBottom: '-3.5px',
    '&:hover button': {
      opacity: '1',
      transition: '0.5s'
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
    bottom: '0px',
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
    transform: 'scale(10)',
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
      padding: '1rem'
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

const ColorBox = ({ background, name, moreUrl, showLink, classes }) => {
  const [isCopied, copy] = useState(false)

  const changeCopyState = () => {
    copy(true)
  }

  useEffect(() => {
    setTimeout(() => copy(false), 1500)
  }, [isCopied])

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className={classes.ColorBox}>
        <div
          style={{ background }}
          className={`${classes.copyOverlay} ${isCopied &&
            classes.showOverlay}`}
        />
        <div className={`${classes.copyMsg} ${isCopied && classes.showMsg}`}>
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div className='copy-container'>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyBtn}>Copy</button>
        </div>
        {showLink && (
          <Link to={moreUrl} onClick={e => e.stopPropagation}>
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  )
}

export default withStyles(styles)(ColorBox)
