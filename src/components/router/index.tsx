import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Shifts from "../../pages/Shifts";
import ResetPassword from "../../pages/ResetPassword";
import Rooms from "../../pages/Rooms";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/shifts" element={<Shifts />} />
          <Route path="/rooms" element={<Rooms />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
