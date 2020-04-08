import React, { useEffect, useState } from "react";
import Axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUser() {
      console.log("gg");
      const users = await Axios("https://jsonplaceholder.typicode.com/users");
      setUsers(users.data);
    }
    getUser();
  }, []);

  return (
    <ul>
      {users.length > 0 &&
        users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
    </ul>
  );
};

export default Users;
