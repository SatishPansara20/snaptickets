import React, { lazy, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NewCar from "./CarManagement/NewCar";
import EditNewCar from "./CarManagement/NewCar/edit";
import UsedCar from "./CarManagement/UsedCar";
import MultipleCar from "./CarManagement/UsedCar/mutipleCar/index";
import EditUsedMutipleCar from "./CarManagement/UsedCar/mutipleCar/edit";
import ViewUsedMultipleCarRow from "./CarManagement/UsedCar/mutipleCar/view/index";
import SingleCar from "./CarManagement/UsedCar/singleCar/index";
import EditSingleCar from "./CarManagement/UsedCar/singleCar/edit/index";
import ViewSignleCar from "./CarManagement/UsedCar/singleCar/view/index";

import EditUserManagement from "./UserManagement/edit";

const LoginIn = lazy(() => import("./LoginIn"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));
const ResetPassword = lazy(() => import("./ResetPassword"));

const Layout = lazy(() => import("../components/layout"));
const Dashboard = lazy(() => import("./Dashboard"));
const MyProfile = lazy(() => import("./MyProfile"));
const EditProfile = lazy(() => import("./MyProfile/EditProfile"));
const ChangePassword = lazy(() => import("./MyProfile/ChangePassword"));
const UserManagement = lazy(() => import("./UserManagement"));

const Routing = () => {
  const [container, setContainer] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<LoginIn />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route
        path="/"
        element={<Layout setContainer={setContainer} container={container} />}
      >
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myprofile/edit" element={<EditProfile />} />
        <Route path="/myprofile/changepassword" element={<ChangePassword />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myprofile/edit" element={<EditProfile />} />
        <Route path="/myprofile/changepassword" element={<ChangePassword />} />
        <Route path="/userManagement" element={<UserManagement />} />
        <Route path="/userManagement/edit" element={<EditUserManagement />} />
        <Route path="/newCar" element={<NewCar />} />
        <Route path="/newCar/edit" element={<EditNewCar />} />
        <Route path="/usedCar" element={<UsedCar />} />
        <Route path="/usedCar/multipleCar" element={<MultipleCar />} />
        <Route
          path="/usedCar/multipleCar/edit"
          element={<EditUsedMutipleCar />}
        />
        <Route
          path="/usedCar/multipleCar/view"
          element={<ViewUsedMultipleCarRow />}
        />

        <Route path="/usedCar/singleCar" element={<SingleCar />} />
        <Route path="/usedCar/singleCar/edit" element={<EditSingleCar />} />
        <Route path="/usedCar/singleCar/view" element={<ViewSignleCar />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Routing;
