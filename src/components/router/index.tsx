import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import Home from "../../pages/Home";
// import Login from "../../pages/Login";
import Shifts from "../../pages/Shifts";
import StudentByClass from "../../pages/StudentByClass";
import NotAttendToday from "../../pages/NotAttendToday";
import Excel from "../../pages/Excel";
// import Dauth from "../../pages/Dauth";
import Forbidden from "../../pages/Forbidden";
import AttendApprove from "../../pages/AttendApprove";
import LongAbsence from "../../pages/LongAbsence";

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
                    <Route path="/attend-approve" element={<AttendApprove />} />
                    <Route path="/long-absence" element={<LongAbsence />} />
                </Route>
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/callback/dauth" element={<Dauth />} /> */}
                <Route path="/forbidden" element={<Forbidden />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
