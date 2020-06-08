import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import List from '@material-ui/core/List';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CreateIcon from '@material-ui/icons/Create';
import Home from "./Home";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddingAssets from '../../Components/addAssets';
import VerifyAssets from '../../Components/verifyAssets';
import ModifyAssets from '../../Components/modifyAssets';
import DisposeOffAssets from '../../Components/disposeAssets';
import WriteOffAssets from '../../Components/writeOfAssets';
import UserMaintance from '../../Components/userMaintanance'



const drawerWidth = 240;

const styles = theme => ({
   root: {
      display: 'flex',
   },
   toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
   },
   toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
   },
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
   },
   appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   menuButton: {
      marginRight: 36,
   },
   menuButtonHidden: {
      display: 'none',
   },
   title: {
      flexGrow: 1,
   },
   drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
         width: theme.spacing(9),
      },
   },
   appBarSpacer: theme.mixins.toolbar,
   content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
   },
   container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
   },
   paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
   },
   fixedHeight: {
      height: 240,
   },
});


class Dashboard extends React.Component {
   state = {
      open: true,
      showHome: true,
      showLandTitles: false,
      showAddAsset: false,
      showVerfyAssets: false,
      showModifyAssets: false,
      showDisposeOffAssets: false,
      showWriteOffAssets: false,
      showUserMaintance: false
   }
   handleUserMaintance = () => {
      this.setState({
         showUserMaintance: true,
         showWriteOffAssets: false,
         showHome: false,
         showLandTitles: false,
         showAddAsset: false,
         showVerfyAssets: false,
         showModifyAssets: false,
         showDisposeOffAssets: false,

      })
   }
   handleshowWriteOffAssets = () => {
      this.setState({
         showWriteOffAssets: true,
         showHome: false,
         showLandTitles: false,
         showAddAsset: false,
         showVerfyAssets: false,
         showModifyAssets: false,
         showDisposeOffAssets: false,
         showUserMaintance: false
      })

   }
   handleDisposeAssets = () => {
      this.setState({
         showHome: false,
         showLandTitles: false,
         showWriteOffAssets: false,
         showAddAsset: false,
         showVerfyAssets: false,
         showModifyAssets: false,
         showDisposeOffAssets: true,
         showUserMaintance: false
      })
   }
   handleShowAssets = () => {
      this.setState({
         showAddAsset: true,
         showHome: false,
         showVerfyAssets: false,
         showWriteOffAssets: false,
         showUserMaintance: false
      })
   }

   handleShowVerifyAssets = () => {
      this.setState({
         showAddAsset: false,
         showHome: false,
         showModifyAssets: false,
         showWriteOffAssets: false,
         showVerfyAssets: true,
         showUserMaintance: false

      })
   }

   handleShowmodifyAssets = () => {
      this.setState({
         showAddAsset: false,
         showWriteOffAssets: false,
         showHome: false,
         showDisposeOffAssets: false,
         showVerfyAssets: false,
         showModifyAssets: true,
         showUserMaintance: false

      })
   }
   handleDrawerOpen = () => {
      this.setState({ open: true })
   };
   handleDrawerClose = () => {
      this.setState({ open: false })
   };

   handleButtonClick = buttonTitle => {
      this.setState({ [buttonTitle]: true, showHome: false })

   }
   render() {
      const { classes } = this.props;
      const { open,
         showHome,
         showWriteOffAssets,
         showUserMaintance,
         showModifyAssets,
         showAddAsset,
         showDisposeOffAssets,
         showVerfyAssets
      } = this.state;
      return (
         <div className={classes.root} >
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
               <Toolbar className={classes.toolbar}>
                  <IconButton
                     edge="start"
                     color="inherit"
                     aria-label="open drawer"
                     onClick={this.handleDrawerOpen}
                     className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                  >
                     <MenuIcon />
                  </IconButton>
                  <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                     Abc Asset Registry
              </Typography>
                  <Typography variant="h6" color="inherit" noWrap >
                     Logout
              </Typography>

                  <IconButton color="inherit">
                     <ExitToAppIcon />
                  </IconButton>
               </Toolbar>
            </AppBar>
            <Drawer
               variant="permanent"
               classes={{
                  paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
               }}
               open={open}
            >
               <div className={classes.toolbarIcon}>
                  <IconButton onClick={this.handleDrawerClose}>
                     <ChevronLeftIcon />
                  </IconButton>
               </div>
               <Divider />
               <List>
                  <div>
                     <ListItem button onClick={handle => { console.log('dashboard clicked') }}>
                        <ListItemIcon>
                           <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                     </ListItem>
                     <ListSubheader inset>Assets</ListSubheader>
                     <ListItem button onClick={this.handleShowAssets}>
                        <ListItemIcon >
                           <QueuePlayNextIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Assets" />
                     </ListItem>
                     <ListItem button onClick={this.handleShowVerifyAssets}>
                        <ListItemIcon>
                           <VerifiedUserIcon />
                        </ListItemIcon>
                        <ListItemText primary="Verify Assets" />
                     </ListItem>
                     <ListItem button onClick={this.handleShowmodifyAssets}>
                        <ListItemIcon>
                           <CreateIcon />
                        </ListItemIcon>
                        <ListItemText primary="Modify Assets" />
                     </ListItem>
                     <ListItem button onClick={this.handleDisposeAssets}>
                        <ListItemIcon>
                           <DeleteSweepIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dispose Assets" />
                     </ListItem>
                     <ListItem button onClick={this.handleshowWriteOffAssets}>
                        <ListItemIcon>
                           <SpellcheckIcon />
                        </ListItemIcon>
                        <ListItemText primary="Write Off Assets" />
                     </ListItem>
                  </div>
               </List>
               <Divider />
               <List>
                  <div>
                     <ListSubheader inset>System</ListSubheader>
                     <ListItem button onClick={this.handleUserMaintance}>
                        <ListItemIcon>
                           <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="User Maintaince" />
                     </ListItem>
                     <ListItem button>
                        <ListItemIcon>
                           <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Exit App" />
                     </ListItem>
                  </div>

               </List>
            </Drawer>
            {showHome && (<Home />)}
            {showAddAsset && (<AddingAssets />)}
            {showVerfyAssets && (<VerifyAssets />)}
            {showModifyAssets && <ModifyAssets />}
            {showDisposeOffAssets && <DisposeOffAssets />}
            {showWriteOffAssets && <WriteOffAssets />}
            {showUserMaintance && <UserMaintance />}
         </div>
      );
   }


}

export default withStyles(styles)(Dashboard);
