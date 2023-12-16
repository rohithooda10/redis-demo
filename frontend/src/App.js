import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      console.log(res);
      setUsers(res);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   fetchData();
  // }, [counter]);
  const handleClick = async () => {
    fetchData();
  };
  return (
    <>
      <input value="Get users" type="button" onClick={handleClick} />
      <div>
        {users.map((user, key) => {
          return <div key={key}>{user.name}</div>;
        })}
      </div>
    </>
  );
}

export default App;
