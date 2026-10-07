import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/users")
      .then((response) => {
        console.log("API RESPONSE:", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("ERROR:", error);
      });
  }, []);

  return (
    <div className="app">
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;