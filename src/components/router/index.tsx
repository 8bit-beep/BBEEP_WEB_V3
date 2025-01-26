import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Move from "../../pages/Move";
import MoveLayout from "../../layouts/MoveLayout";
import MoveApproved from "../../pages/MoveApproved";
import ResetPassword from "../../pages/ResetPassword";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="move" element={<MoveLayout />}>
            <Route index element={<Move />} />
            <Route path="approved" element={<MoveApproved />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
