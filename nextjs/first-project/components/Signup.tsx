"use client";

import { useState, ChangeEventHandler } from "react";
import { useRouter } from "next/navigation";
import { signup } from "../app/actions/user";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  return (
    <div className="rounded-lg border border-gray-300 flex flex-col justify-start items-center gap-4 p-6 hover:bg-gray-100">
      <span className="text-4xl font-semibold">Sign Up</span>
      <div>
        <LabelledInput
          label="Username"
          placeholder="rajendra@gmail.com"
          type="text"
          value={username}
          updateValue={(e) => {
            setUsername(e.target.value);
          }}
        />
        <LabelledInput
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          updateValue={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button
        className="px-4 py-2 w-full rounded-lg bg-slate-900 text-lg font-semibold text-white"
        onClick={async () => {
          const data = await signup(username, password);
          console.log(data);
          router.push("/");
        }}
      >
        Sign Up
      </button>
    </div>
  );
}

interface labelledInputType {
  label: string;
  value: string;
  updateValue: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type: string;
}

function LabelledInput({
  label,
  value,
  updateValue,
  placeholder,
  type,
}: labelledInputType) {
  return (
    <div className="py-2 flex flex-col justify-start gap-2">
      <label className="text-xl font-medium">{label}</label>
      <input
        type={type || "text"}
        placeholder={placeholder}
        className="p-2 text-base border-2 border-gray-300 rounded-lg"
        value={value}
        onChange={updateValue}
      />
    </div>
  );
}
