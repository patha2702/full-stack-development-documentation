
import React from "react";
import { doSocialLogin } from "@/app/actions";

const LoginForm = () => {
  return (
    <form className="py-4" action={doSocialLogin}>
      <button
        className="px-4 py-2 rounded-lg text-base bg-black text-white border border-white"
        type="submit"
        name="action"
        value="google"
      >
        Continue with Google
      </button>
      <button
        className="px-4 py-2 rounded-lg text-base bg-black text-white border border-white"
        type="submit"
        name="action"
        value="github"
      >
        Continue with Github
      </button>
    </form>
  );
};

export default LoginForm;
