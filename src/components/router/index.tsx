import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Shifts from "../../pages/Shifts";
import StudentByClass from "../../pages/StudentByClass";
import ResetPassword from "../../pages/ResetPassword";
import SendPasswordPage from "../../pages/SendPassword";
import NotAttendToday from "../../pages/NotAttendToday";
import Excel from "../../pages/Excel";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/shifts" element={<Shifts />} />
          <Route path="/classes" element={<StudentByClass />} />
          <Route path="/not-attend" element={<NotAttendToday />} />
          <Route path="/excel" element={<Excel />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/send-password" element={<SendPasswordPage />} />
        <Route path="/reset-password/:id" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
