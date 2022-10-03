import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
type user = {
  id: any;
  userName: String;
  email: String | number;
  mobileNo: String | number;
  role: String;
};

const Home = () => {
  const [users, setUsers] = useState<user[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data);
  };
  
  return (
    <>
      <table
        className="table border shadow"
        style={{ margin: "auto", marginTop: "10rem", width: "1000px" }}
      >
        <thead style={{ backgroundColor: "darkblue", color: "white" }}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.mobileNo}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="btn btn-primary"
                  style={{ marginRight: "5px", padding: "5px" }}
                >
                  <Link to="/userform" style={{ color: "white", textDecoration:"none" }}>
                    View
                  </Link>
                </button>
                <button
                  className="btn btn-outline-primary"
                  style={{ marginRight: "5px", padding: "5px"}}
                >
                  <Link to="/edit" style={{textDecoration:"none"}}>
                    Edit
                  </Link>
                </button>
                <button className="btn btn-danger" style={{ padding: "5px" }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
