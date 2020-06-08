import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

function Copyright() {
   return (
      <Typography variant="body2" color="textSecondary" align="center">
         {'Copyright © '}
         <Link color="inherit" href="#">
            abc capital bank (u) Ltd
      </Link>{' '}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   );
}

const useStyles = theme => ({
   root: {
      // height: '70vh',
      marginTop: "20px",
      margin: "auto",

   },
   paper: {
      margin: theme.spacing(4, 3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
   },
   form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      // margin: "auto"
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   }
});

class Login extends Component {
   // ail state
   state = {
      UserId: "",
      UserPassword: "",
      error: "",
      loading: false

   }
   // function handling onchange in the form
   handleInputChange = event => {
      const { name, value } = event.target;
      this.setState(
         { [name]: value }
      );

   }

   // on submit of the login form
   handleSubmit = event => {
      this.setState({ loading: true })
      event.preventDefault();
      const { UserId, UserPassword } = this.state;
      const data = {
         UserId,
         UserPassword
      }
      console.log(this.state)
      fetch("http://10.10.10.198/ABCFARAPI/Api/Login/User ", {
         method: "POST",
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      })
         .then(Response => Response.json())
         .then(Result => {
            console.log(Result);
            if (Result.Message === "Login Successful") {
               this.props.history.push("/dashboard");
            } else if (Result.Error) {
               this.setState({ error: Result.Error });
            }
         })
   }
   render() {
      const { classes } = this.props;
      return (
         <div className={classes.main} style={{ margin: "auto", marginTop: "120px" }}>
            <Grid container className={classes.root}>
               <CssBaseline />
               <Grid item xs={12} sm={8} md={4} style={{ margin: "auto" }} component={Paper} elevation={6} square>
                  <div className={classes.paper}>
                     <Avatar className={classes.avatar}>
                     </Avatar>
                     <Typography component="h6" variant="h6">
                        Sign in To Abc Finance Asset register
                  </Typography>
                     <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
                        <TextField

                           variant="standard"
                           margin="normal"
                           required
                           fullWidth
                           id="UserId"
                           label="UserId"
                           name="UserId"
                           onChange={this.handleInputChange}
                           value={this.state.UserId}
                           autoComplete="UserId"
                           autoFocus
                        />
                        {this.state.error !== "" ? (<span>{this.state.error}</span>) : null}
                        <TextField
                           variant="standard"
                           margin="normal"
                           required
                           type="password"
                           fullWidth
                           id="UserPassword"
                           label="Password"
                           name="UserPassword"
                           onChange={this.handleInputChange}
                           value={this.state.UserPassword}
                           autoComplete="UserPassword"
                           autoFocus
                        />
                        {this.state.error !== "" ? (<span>{this.state.error}</span>) : null}
                        <Button
                           type="submit"
                           fullWidth
                           variant="contained"
                           color="primary"
                           className={classes.submit}
                        >
                           Sign In
               </Button>
                        <Grid container>
                           <Grid item xs>
                              <Link href="#" variant="body2">
                                 Forgot password?
                            </Link>
                           </Grid>
                        </Grid>
                        <Box mt={5}>
                           <Copyright />
                        </Box>
                     </form>
                  </div>
               </Grid>
            </Grid>

         </div>

      );
   }

}
export default withStyles(useStyles)(Login)
