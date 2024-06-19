import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={async () => {
            const data = await axios.post(
              BACKEND_URL + "signin",
              {
                email,
                password,
              },
              {
                withCredentials: true,
              }
            );
            console.log(data.data);
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
