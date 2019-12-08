import { makeStyles } from '@material-ui/core/styles'
import sizes from './sizes'

const drawerWidth = 380

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: 'row !important',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 20,
    marginLeft: 12
  },
  navBtns: {
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none'
    },
    [sizes.down('xs')]: {
      marginRight: '0.5rem'
    }
  },
  navBtn: {
    margin: '0 0.5rem',
    [sizes.down('xs')]: {
      margin: '0 0.2rem',
      padding: '0.3rem'
    }
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center'
  },
  drawerHeader: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  container: {
    width: '90%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto'
  },
  btns: {
    width: '100%'
  },
  btn: {
    width: '50%'
  },
  picker: {
    width: '100% !important',
    marginTop: '2rem'
  },
  addColor: {
    width: '100%',
    marginTop: '1rem',
    fontSize: '2rem !important'
  },
  colorNameInput: {
    width: '100%',
    height: '70px'
  },
  content: {
    height: 'calc(100vh - 64px)',
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}))
