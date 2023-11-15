import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../theme/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));
const initialValue = {username: '', email: ''};

export default function SignupForm() {
  const classes = useStyles();
  const [formValues, setFormValue] = useState(initialValue);
 

  const handleChanges = e => {
   e.preventDefault();
   console.log(e.target.name);
   console.log(e.target.value);
   setFormValue({...formValues, [e.target.name]: e.target.value}) // ..formValues creates a shallow copy of the formValues object, the next part updates a property (username) in the new object.
   // the property name is taken from the e.target.name value (from the form input field) and its value is set to e.target.value (the value of the input field)
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(firstName);
  };

  const clearForm = e => {
    e.preventDefault();
    setFormValue(initialValue); //this is to clear the form 
  };

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="User Name"
            className={classes.textField}
            name="username"
            value={formValues.username}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Email"
            className={classes.textField}
            name="email"
            value={formValues.email}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}