import React, { useContext } from 'react'
import { LevelContext, FormatContext } from '../contexts/ColorContext'
import { Link } from 'react-router-dom'
import useToggle from '../hooks/useToggle'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/NavbarStyles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const Navbar = ({ showingLevel, classes }) => {
  const [level, setLevel] = useContext(LevelContext)
  const [format, setFormat] = useContext(FormatContext)
  const [open, setOpen] = useToggle(false)

  const changeFormat = e => {
    setFormat(e.target.value)
    setOpen(open)
  }

  const closeSnackbar = () => {
    setOpen(open)
  }

  return (
    <nav className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to='/'>reactcolorpicker</Link>
      </div>
      {showingLevel && (
        <div>
          <span>Level: {level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              onAfterChange={setLevel}
              step={100}
            />
          </div>
        </div>
      )}
      <div className={classes.selectContainer}>
        <Select value={format} onChange={changeFormat}>
          <MenuItem value='hex'>HEX - #ffffff</MenuItem>
          <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={3000}
        message={<span id='message-id'>Format Changed!</span>}
        ContentProps={{ 'aria-describedby': 'message-id' }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color='inherit'
            key='close'
            aria-label='close'>
            <CloseIcon />
          </IconButton>
        ]}
      />
    </nav>
  )
}

export default withStyles(styles)(Navbar)
