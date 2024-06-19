import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";
import SignIn from "./components/SignIn";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}