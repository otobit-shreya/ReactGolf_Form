import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Grid, Box, Checkbox } from "@mui/material";
import "./UserForm.css";
import { validations } from "../components/schemas/validations";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditForm: React.FC<{}> = () => {

  const navigate = useNavigate();
  const {id} = useParams();
  const onSubmit = async (values: any, actions: any) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
    setLockUser(!checkChangeHandler);
    await axios.post("http://localhost:3003/users", values);
    navigate("/");
  };
  const [lockUser, setLockUser] = useState(false);

  const loadUser = async()=>{
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    console.log(result.data);
  }

useEffect(()=>{
    loadUser();
},[])

  const checkChangeHandler: any = () => {
    setLockUser(!lockUser);
  };
  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik<{
    userName: string;
    email: string | number;
    password: string;
    mobileNo: string | number;
    role: string;
    lockUser: boolean;
  }>({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      mobileNo: "",
      role: "",
      lockUser: true,
    },
    validationSchema: validations,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
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
              type="text"
              id="userName"
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.userName && touched.userName ? "input-error" : ""
              }
            />
            {errors.userName && touched.userName && (
              <p className="error">{errors.userName}</p>
            )}
          </Grid>
          <Grid item lg={6} xs={20} sm={12}>
            <label htmlFor="email">
              <b>E- Mail Address</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={15} sm={6}>
            <input
              type="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
            )}
          </Grid>
          <Grid item lg={6} xs={20} sm={12}>
            <label htmlFor="password">
              <b>Password</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={15} sm={6}>
            <input
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.password && touched.password ? "input-error" : ""
              }
            />
            {errors.password && touched.password && (
              <p className="error">{errors.password}</p>
            )}
          </Grid>
          <Grid item lg={6} xs={20} sm={12}>
            <label htmlFor="mobileNo">
              <b>Mobile No.</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={15} sm={6}>
            <input
              type="number"
              id="mobileNo"
              value={values.mobileNo}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.mobileNo && touched.mobileNo ? "input-error" : ""
              }
            />
            {errors.mobileNo && touched.mobileNo && (
              <p className="error">{errors.mobileNo}</p>
            )}
          </Grid>
          <Grid item lg={6} xs={20} sm={12}>
            <label>
              <b>Role</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={15} sm={6}>
            <select
              value={values.role}
              id="role"
              className={errors.role && touched.role ? "input-error" : ""}
              onChange={handleChange}
            >
              <option>Select</option>
              <option>Floor Manager</option>
              <option>Option1</option>
              <option>Option2</option>
              <option>option3</option>
            </select>
            {errors.role && touched.role && (
              <p className="error">{errors.role}</p>
            )}
          </Grid>
          <Grid item lg={6} xs={12} sm={12}>
            <label>
              <b>Lock User</b>
            </label>
          </Grid>
          <Grid item lg={6} xs={12} sm={12} className="checkbox">
            <Checkbox
              id="lockUser"
              size="small"
              value={values.lockUser}
              checked={lockUser}
              onChange={checkChangeHandler}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item lg={6} xs={12} sm={12}></Grid>
          <Grid item lg={6} xs={12} sm={12}>
            <button className="actions" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default EditForm;
