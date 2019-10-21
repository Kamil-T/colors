import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styles from '../styles/ColorBoxStyles'

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
