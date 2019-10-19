import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const ColorBox = ({ background, name, moreUrl, showLink }) => {
  const [isCopied, copy] = useState(false)

  const changeCopyState = () => {
    copy(true)
  }

  useEffect(() => {
    setTimeout(() => copy(false), 1500)
  }, [isCopied])

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className='ColorBox'>
        <div
          style={{ background }}
          className={`copy-overlay ${isCopied && 'show'}`}
        />
        <div className={`copy-msg ${isCopied && 'show'}`}>
          <h1>copied!</h1>
          <p>{background}</p>
        </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <button className='copy-btn'>Copy</button>
        </div>
        {showLink &&
        <Link to={moreUrl} onClick={e => e.stopPropagation}>
          <span className='see-more'>More</span>
        </Link>
        }
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox
