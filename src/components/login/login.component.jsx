import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import HomePage from '../../pages/homepage/homepage.component'
const styles = theme => ({
        button: {
          display: "flex",
          marginLeft:"auto",
          
          
        },
        input: {
          display: 'none',
        },
      });

export default class Login extends Component {
    render() {
        return (
            <form>
                 <h3>Sign In</h3>
                <TextField
          id="email"
          label="Email"
          style={{ margin: 8 }}
          placeholder="enter email address"
          helperText="Mandotary"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        
        <TextField
          id="standard-password-input"
          label="Password"
          style={{ margin: 8 }}
          fullWidth
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          
          />
          
           <Button variant="contained" color="primary" onClick={event => window.location.href="/homepage"} >
                   Submit
                 </Button>
               

                
            </form>
        );
    }
}