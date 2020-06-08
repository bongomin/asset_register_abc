import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export const secondaryListItems = (
   <div>
      <ListSubheader inset>System</ListSubheader>
      <ListItem button>
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
);