import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useStyles } from '../styles/NewPaletteFormStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Button from '@material-ui/core/Button'
import { OpenContext } from '../contexts/NewPaletteContext'
import PaletteMetaForm from './PaletteMetaForm'

const PaletteFormNav = ({ history }) => {
  const classes = useStyles()
  const [open, setOpen] = useContext(OpenContext)
  const [formShowing, setShowing] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const formShow = () => {
    setShowing(true)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        color='default'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}>
        <Toolbar disableGutters={!open}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}>
            <ChevronRightIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to='/' className={classes.link}>
            <Button
              variant='contained'
              color='secondary'
              className={classes.navBtn}>
              Go back
            </Button>
          </Link>
          <Button
            variant='contained'
            color='primary'
            onClick={formShow}
            className={classes.navBtn}>
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm
          history={history}
          formShowing={formShowing}
          setShowing={setShowing}
        />
      )}
    </div>
  )
}

export default PaletteFormNav
