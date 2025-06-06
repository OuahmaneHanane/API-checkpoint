import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";

const UserList = () => {
  // State to store fetched user data
  const [listOfUser, setListOfUser] = useState([]);

  // useEffect to fetch data from the API once component mounts
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data); // Store data in state
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []); // Empty dependency array to run only once

  return (
    <div className="user-list-container">
      <h1>Users List</h1>
      <ul>
        {listOfUser.map((user) => (
          <li key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>
               <strong>Email:</strong> {user.email}
            </p>
            <p>
               <strong>City:</strong> {user.address.city}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;