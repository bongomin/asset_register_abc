import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';



const useStyles = theme => ({
   root: {
      margin: "20px",
      flexGrow: 2,
      marginTop: 70,
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
   btn: {
      margin: theme.spacing(1),
   }

});

class UserMaintainceInputs extends Component {

   // state handling
   state = {
      UserId: "",
      UserPassword: "",
      confirmPassword: "",
      FirstName: "",
      LastName: "",
      error: "",
      loading: false,
      roles: [
         {
            value: "ADMIN",
            label: "Administrator"
         },
         {
            value: "FINOR",
            label: "Finance Officer"
         },
         {
            value: "FINMGR",
            label: "Finance Manager"
         }
      ]
   }

   handleF2Click() {
      return (
         <div>f2 clicked</div>
      )
   }

   componentWillMount() {
      // this.fetchDropdownsForUserRoles();
   }

   fetchDropdownsForUserRoles = () => {
      fetch("http://10.10.10.198/ABCFARAPI/Api/Users/AddUser ", {
         method: "GET",
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         }
      })
         .then(Response => Response.json())
         .then(Result => {
            if (Result) {
               this.setState({ roles: Result });
            }
         })
   }
   // function handling onchange in the form
   handleInputChange = event => {
      const { name, value } = event.target;
      console.log(value);
      this.setState(
         { [name]: value }
      );
   }

   // on submit of the login form
   handleSubmit = event => {

      const {
         UserId,
         UserPassword,
         confirmPassword,
         FirstName,
         LastName,
         UserRole
      } = this.state;
      const data = {
         UserId,
         UserPassword,
         confirmPassword,
         FirstName,
         LastName,
         UserRole
      }

      if (UserPassword !== confirmPassword) {
         this.setState({
            error: "Password do not match"
         })

      } else if (FirstName.length === 0) {
         this.setState({
            error: "please fill in the First Name"
         })
      } else if (LastName.length === 0) {
         this.setState({
            error: "please fill in the LastName"
         })
      }
      else if (UserId.length === 0) {
         this.setState({
            error: "User Id Is missing"
         })
      }

      else {
         console.log(this.state)
         fetch(" http://10.10.10.198/ABCFARAPI/Api/Users/AddUser ", {
            method: "POST",
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
         })
            .then(Response => Response.json())
            .then(Result => {
               if (Result.Message === "User Added SuccessFully") {
                  // console.log(data)
                  this.props.history.push("/dashboard");
                  this.setState({ loading: false });
               } else if (Result.Error) {
                  this.setState({ error: Result.Error });
               }

               console.log(Result.Message);
            })

      }
      event.preventDefault();

   }


   render() {
      const { classes } = this.props;
      return (
         <div className={classes.root}>
            <CssBaseline />

            <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
               <Grid item xs={12}>
                  {this.state.error ? (<Paper className={classes.paper} style={{ background: "red", color: "white", padding: "10px" }}>{this.state.error}</Paper>) : null}

               </Grid>

               <Grid container spacing={1}>
                  <Grid item xs={12} sm={4}>

                     {this.state.loading ? (<span>Loading...</span>) : null}
                     <paper className={classes.paper}>
                        <TextField
                           variant="outlined"
                           margin="normal"
                           size="small"
                           required
                           fullWidth
                           onClick={this.handleF2Click}
                           id="UserId"
                           label="User Id"
                           name="UserId"
                           onChange={this.handleInputChange}
                           value={this.state.UserId}
                           autoComplete="UserId"
                           autoFocus
                        />
                     </paper>

                     <paper className={classes.paper}>
                        <TextField
                           variant="outlined"
                           margin="normal"
                           size="small"
                           required
                           type="password"
                           fullWidth
                           id="UserPassword"
                           label="Password"
                           name="UserPassword"
                           onChange={this.handleInputChange}
                           value={this.state.UserPassword}
                           autoComplete="password"
                           autoFocus
                        />
                     </paper>

                     <paper className={classes.paper}>
                        <TextField
                           variant="outlined"
                           margin="normal"
                           size="small"
                           type="password"
                           required
                           fullWidth
                           id="confirmPassword"
                           label="Confirm Password"
                           onChange={this.handleInputChange}
                           value={this.state.confirmPassword}
                           name="confirmPassword"
                           autoComplete="confirmPassword"
                           autoFocus
                        />
                     </paper>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                     <paper className={classes.paper}>
                        <TextField
                           variant="outlined"
                           margin="normal"
                           size="small"
                           required
                           fullWidth
                           id="FirstName"
                           label="First Name"
                           name="FirstName"
                           onChange={this.handleInputChange}
                           value={this.state.FirstName}
                           autoComplete="First Name"
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
                           name="LastName"
                           onChange={this.handleInputChange}
                           value={this.state.LastName}
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
                           id="UserRole"
                           select
                           label="Select"
                           name="UserRole"
                           onChange={this.handleInputChange}
                           helperText="select user role"
                        >
                           {this.state.roles.length ? this.state.roles.map(option => (
                              <MenuItem key={option.value} value={option.value}>
                                 {option.label}
                              </MenuItem>
                           )) : null}
                        </TextField>
                     </paper>
                  </Grid>
                  <Grid item xs={4}></Grid>
                  <Grid item xs={8}>
                     <Button type="submit" variant="contained" className={classes.btn} color="primary" >
                        Add
                      </Button>

                     <Button variant="contained" className={classes.btn} color="primary" disableElevation>
                        Verify
                      </Button>
                     <Button variant="contained" className={classes.btn} color="secondary" disableElevation>
                        Edit
                      </Button>
                     <Button variant="contained" className={classes.btn} color="danger" disableElevation>
                        Cancel
                      </Button>
                  </Grid>
               </Grid>
            </form>
         </div>

      );
   }
}
export default withStyles(useStyles)(UserMaintainceInputs);