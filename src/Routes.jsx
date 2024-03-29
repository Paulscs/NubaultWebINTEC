import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SettingPageSecurity = React.lazy(
  () => import("pages/SettingPageSecurity"),
);
const SettingPagePreferences = React.lazy(
  () => import("pages/SettingPagePreferences"),
);
const SettingEditProfile = React.lazy(() => import("pages/SettingEditProfile"));
const Services = React.lazy(() => import("pages/services"));
const Loan = React.lazy(() => import("pages/Loan"));
const CreditCards = React.lazy(() => import("pages/CreditCards"));
const Investments = React.lazy(() => import("pages/Investments"));
const Accounts = React.lazy(() => import("pages/Accounts"));
const Transaction = React.lazy(() => import("pages/Transaction"));
// const MainDashboard = React.lazy(() => import("pages/MainDashboard"));
const SignIn = React.lazy(() => import("pages/SigninDefault"));
const SignUp = React.lazy(() => import("pages/SignupDefault"));
const Transferencias = React.lazy(() => import("pages/Transferencias"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/productos" element={<CreditCards />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/beneficiarios" element={<Services />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Transferencias" element={<Transferencias />} />
          <Route path="/settingeditprofile" element={<SettingEditProfile />} />
          <Route
            path="/settingpagepreferences"
            element={<SettingPagePreferences />}
          />
          <Route
            path="/settingpagesecurity"
            element={<SettingPageSecurity />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
