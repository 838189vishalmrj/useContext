import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
import "./user.css";

const UserContainer = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <h2>User Details</h2>
      {user ? (
        <table className="userTable">
          <thead>
            <tr>
              <th>First Name</th>
              <td>{user.firstName}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{user.lastName}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{user.gender}</td>
            </tr>
            <tr>
              <th>Image</th>
              <td>
                <img src={user.image} alt="profile-pic" />
              </td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{user.username}</td>
            </tr>
          </thead>
        </table>
      ) : (
        "Please login first"
      )}
    </>
  );
};

export default UserContainer;
