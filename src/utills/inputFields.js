import React from 'react';
import TextField from '@material-ui/core/TextField';


const InputField = (props) => {

   return (

      <TextField
         variant={props.variant}
         margin="normal"
         required
         fullWidth
         id={props.id}
         label={props.label}
         name={props.name}
         autoComplete={props.autoComplete}
         autoFocus
      />

   )

}
export default InputField;