import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import StickyHeadTable from './AssetsTable'



const useStyles = makeStyles(theme => ({
   root: {
      margin: "10px",
      flexGrow: 1,
      marginTop: 60,
   },
   paper: {
      margin: theme.spacing(0, 0),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
   },
   btn: {
      margin: theme.spacing(1),
   }

}));

const RegisterAssets = () => {
   const classes = useStyles();
   return (
      <div className={classes.root}>
         <CssBaseline />
         <form className={classes.form} noValidate>
            <Grid container spacing={1}>
               <Grid item xs={12} sm={4}>
                  <paper className={classes.paper}>
                     <TextField
                        variant="outlined"
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="InventoryNumber"
                        label="Inventory Number"
                        name="InventoryNumber"
                        autoComplete="InventoryNumber"
                        autoFocus
                     />
                  </paper>
                  <paper className={classes.paper}>
                     <TextField
                        variant="outlined"
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="Branch"
                        label="Branch"
                        name="Branch"
                        autoComplete="Branch"
                        autoFocus
                     />
                  </paper>
               </Grid>
               <Grid item xs={12} sm={4}>
                  <paper className={classes.paper}>
                     <TextField
                        variant="outlined"
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="LastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="Last Name"
                        autoFocus
                     />
                  </paper>
                  <paper className={classes.paper}>
                     <TextField
                        variant="outlined"
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="LastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="Last Name"
                        autoFocus
                     />
                  </paper>
               </Grid>
               <Grid item xs={12} sm={4}>
                  <paper className={classes.paper}>
                     <TextField
                        variant="outlined"
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="LastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="Last Name"
                        autoFocus
                     />
                  </paper>
                  <paper className={classes.paper}>
                     <TextField
                        variant="outlined"
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="LastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="Last Name"
                        autoFocus
                     />
                  </paper>
               </Grid>
               <Grid item xs={12} sm={12}>
                  <TextField
                     id="filled-multiline-static"
                     label="Asset Description"
                     required
                     fullWidth
                     multiline
                     rows="2"
                     variant="filled"
                  />
               </Grid>
               <Grid item xs={12} sm={12}>
                  <StickyHeadTable />
               </Grid>
               <Grid item xs={4}></Grid>
               <Grid item xs={4}></Grid>
               <Grid item xs={4}>
                  <Button variant="contained" className={classes.btn} color="primary" disableElevation>
                     Add
                   </Button>
                  <Button variant="contained" className={classes.btn} color="secondary" disableElevation>
                     Save
                   </Button>
               </Grid>
            </Grid>
         </form>
      </div>

   );
}
export default RegisterAssets;