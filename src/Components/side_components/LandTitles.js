import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
   root: {
      flexGrow: 1,

   },
   paper: {
      margin: theme.spacing(1, 1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },

}));

const LandTitles = () => {
   const classes = useStyles();
   return (
      <div className={classes.root}>
         <CssBaseline />
         <form className={classes.form} noValidate>
            <Grid container spacing={1}>
               <Grid item xs={12} sm={6}>
                  <paper className={classes.paper}>
                     <TextField
                        variant="outlined"
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
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
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                     />
                  </paper>
               </Grid>
               <Grid item xs={12} sm={6}>
                  <paper className={classes.paper}>
                     <TextField
                        variant="outlined"
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
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
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                     />
                  </paper>
               </Grid>
            </Grid>
         </form>
      </div>

   );
}
export default LandTitles;