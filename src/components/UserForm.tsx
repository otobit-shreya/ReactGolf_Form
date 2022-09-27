import React, { useState } from "react";
import { Grid, Box, Checkbox} from "@mui/material";
import classes from "./UserForm.module.css";


const UserForm: React.FC= () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string | number>("");
  const [mobileNo, setMobileNo] = useState<string | number>("");
  const [role, setRole] = useState("");
  const [lockUser, setLockUser] = useState(false);
 

  const userNameChangeHandler= (e:any) => {
    setUserName(e.target.value);
  };

  const emailChangeHandler = (e:any) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e:any) => {
    setPassword(e.target.value);
  };

  const mobileNoChangeHandler = (e:any) => {
    setMobileNo(e.target.value);
  };

  const roleChangeHandler = (e:any) => {
    setRole(e.target.value);
  };


  const checkChangeHandler:any= () => {
    setLockUser(!lockUser);
  };

 

  const formSubmitHandler = (e:React.FormEvent) =>{
    e.preventDefault();
    const info = {userName, email, password, mobileNo, role, lockUser};
    console.log(info); 
    
    setUserName("");
    setEmail("");
    setPassword("");
    setMobileNo("");
    setRole("");
    setLockUser(checkChangeHandler);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <Box
        sx={{
          margin: "auto",
          marginTop: "2rem",
          width: 500,
          height: 350,
          

          //    backgroundColor:"lightgray"
        }}
      >
        <Grid lg={20} item container spacing={3}>
          <Grid item lg={6} xs={10} sm={12}>
            <label htmlFor="username">
              <b>User Name</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={5} sm={6}>
            <input 
            type="text" 
            id="username" 
            onChange={userNameChangeHandler}
             value={userName}/>
          </Grid>
          <Grid item lg={6} xs={10} sm={12}>
            <label htmlFor="email">
              <b>E- Mail Address</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={5} sm={6}>
            <input 
            type="email" 
            id="email" 
            onChange={emailChangeHandler} 
            value={email} />
          </Grid>
          <Grid item lg={6} xs={10} sm={12}>
            <label htmlFor="password">
              <b>Password</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={5} sm={6}>
            <input
              type="password"
              id="password"
              onChange={passwordChangeHandler}
              value={password}
            />
          </Grid>
          <Grid item lg={6} xs={10} sm={12}>
            <label htmlFor="mobile">
              <b>Mobile No.</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={5} sm={6}>
            <input type="number"
             id="mobile" 
             onChange={mobileNoChangeHandler}
             value={mobileNo}
             />
          </Grid>
          <Grid item lg={6} xs={10} sm={12}>
            <label>
              <b>Role</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={5} sm={6}>
            <select onChange={roleChangeHandler} value={role}>
              <option >Select</option>
              <option>Floor Manager</option>
              <option>Option2</option>
              <option>Option3</option>
              <option>option4</option>
            </select>
          </Grid>
          <Grid item lg={6} xs={12} sm={12}>
            <label>
              <b>Lock User</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={12} sm={12} className={classes.checkbox}>
            <Checkbox
            
          
            size="small" 
            checked={lockUser} 
            onChange={checkChangeHandler}
          
            />
          </Grid>
          <Grid item lg={6} xs={12} sm={12}></Grid>
          <Grid item lg={6} xs={12} sm={12}>
            <button className={classes.actions} type="submit">Submit</button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default UserForm;
