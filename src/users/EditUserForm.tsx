import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Grid, Box, Checkbox } from "@mui/material";

const EditUserForm = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [lockUser, setLockUser] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    email: "",
    mobileNo: "",
    role: "",
    password:"",
    lockUser:false,
  });

  const { userName, email, mobileNo, password, role} = user;
  

  const checkChangeHandler: any = () => {
    setLockUser(!lockUser);
  };
  const onInputChange = (event:any) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const submitHandler = async (event:any) => {
    event.preventDefault();
    setLockUser(!checkChangeHandler);
    await axios.put(`http://localhost:3003/users/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get('http://localhost:3003/users/' +id);
    setUser(result.data);
  };
  return (
    <form onSubmit={submitHandler}>
      <h1 style={{ textAlign: "center", fontSize: "30px", marginTop: "8rem" }}>
        Edit User
      </h1>
      <Box
        sx={{
          margin: "auto",
        }}
      >
        <Grid
          lg={6}
          item
          container
          spacing={2}
          style={{ margin: "auto", padding: "4rem" }}
        >
          <Grid item lg={6} xs={20} sm={12}>
            <label htmlFor="userName">
              <b>User Name</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={15} sm={6}>
            <input
              name="userName"
              type="text"
              value={userName}
              onChange={onInputChange}
              
            />
            
          </Grid>
          <Grid item lg={6} xs={20} sm={12}>
            <label htmlFor="email">
              <b>E- Mail Address</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={15} sm={6}>
            <input
            name="email"
              type="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item lg={6} xs={20} sm={12}>
            <label htmlFor="password">
              <b>Password</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={15} sm={6}>
            <input
              name="password"
              type="password"
              value={password}
              onChange={onInputChange} 
            />
          </Grid>
          <Grid item lg={6} xs={20} sm={12}>
            <label htmlFor="mobileNo">
              <b>Mobile No.</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={15} sm={6}>
            <input
            name="mobileNo"
              type="number"
              value={mobileNo}
              onChange={onInputChange}
             
            />
           
          </Grid>
          <Grid item lg={6} xs={20} sm={12}>
            <label>
              <b>Role</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={15} sm={6}>
            <select
              value={role}
              name="role"
              onChange={onInputChange}
            >
              <option>Select</option>
              <option>Floor Manager</option>
              <option>Option1</option>
              <option>Option2</option>
              <option>option3</option>
            </select>
            
          </Grid>
          <Grid item lg={6} xs={12} sm={12}>
            <label>
              <b>Lock User</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={12} sm={12} className="checkbox">
            <Checkbox
            name="lockUser"
              size="small"
              value={lockUser}
              checked={lockUser}
              onChange={checkChangeHandler}
            />
          </Grid>
          <Grid item lg={6} xs={12} sm={12}></Grid>
          <Grid item lg={6} xs={12} sm={12}>
            <button className="actions" type="submit" >
              Submit
            </button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default EditUserForm;