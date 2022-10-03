import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUserForm = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    mobileNo: "",
    password: "",
    role:"",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div style={{marginTop:"10rem"}}>
      
      <h1 >User Id: {id}</h1><hr/>
      <ul className="list-group w-50">
       
       
        <table cellPadding={10} >
            <tr>
                <td>
                   <b> UserName:</b>
                </td>
                <td>
                    {user.userName}
                </td>
            </tr>
            <tr>
                <td>
                   <b> Password:</b>
                </td>
                <td>
                    {user.password}
                </td>
            </tr>
            <tr>
                <td>
                    <b>Email:</b>
                </td>
                <td>
                    {user.email}
                </td>
            </tr>
            <tr>
                <td>
                    <b>MobileNo:</b>
                </td>
                <td>
                    {user.mobileNo}
                </td>
            </tr>
            <tr>
                <td>
                    <b>Role</b>
                </td>
                <td>
                    {user.role}
                </td>
            </tr>
        </table>
      </ul>
      <Link className="btn btn-primary" to="/" style={{marginTop:"2rem"}}>
        Back to Home
      </Link>
    </div>
  );
};

export default ViewUserForm;