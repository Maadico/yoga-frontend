import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import { PrivateRoute } from "./components/Routes/PrivateRoute.js";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Profile from "./pages/user/Profile";
import ResetPassword from "./pages/Auth/ResetPassword";
import ContactUs from "./pages/ContactUs.jsx";
import AdminCourse from "./pages/admin/functions/AdminCourse.jsx";
import UserCourseView from "./pages/user/functions/UserCourseView.jsx";
import Contact from "./pages/admin/functions/Contact.jsx";
import AdminUsers from "./pages/admin/functions/AdminUsers.jsx";
import Paymentfail from "./components/layout/Paymentfail.jsx";
import Paymentsuccess from "./components/layout/Paymentsuccess.jsx";
import YourCourse from "./pages/user/functions/YourCourse.jsx";
import Joinmeet from "./pages/Joinmeet.jsx";
import AdminSubscription from "./pages/admin/functions/AdminSubscription.jsx";
import Privacy from "./pages/Extra/Privacy.jsx";
import TermsConditions from "./pages/Extra/TermsConditions.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/paymentfail" element={<Paymentfail />} />
        <Route path="/paymentsuccess" element={<Paymentsuccess />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/viewcourses" element={<UserCourseView />} />
          <Route path="user/yourcourse" element={<YourCourse />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/course" element={<AdminCourse />} />
          <Route path="admin/contact" element={<Contact />} />
          <Route path="admin/view-users" element={<AdminUsers />} />
          <Route
            path="admin/view-subscriptions"
            element={<AdminSubscription />}
          />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/reset_password/:id/:token"
          element={<ResetPassword />}
        ></Route>

        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/join-meeting" element={<Joinmeet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
