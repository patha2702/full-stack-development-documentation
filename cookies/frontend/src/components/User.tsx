import { useState, useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
export default function User() {
  const [user, setUser] = useState();
  useEffect(() => {
    axios
      .get(BACKEND_URL + "user", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
      });
  });
  return (
    <div>
      <p>Your id is {user?.id}</p>
      <br />
      <button onClick={async()=>{
        axios.post(BACKEND_URL + "logout", {}, {
            withCredentials: true
        })
      }}>Logout</button>
    </div>
  );
}
