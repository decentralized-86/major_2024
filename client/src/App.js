import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./Components/Auth/Signin/Signin";
import SignUp from "./Components/Auth/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import AdminHome from "./Components/AdminHome/AdminHome";
import AdminDashboard from "./Components/AdminHome/AdminPages/AdminDashboard/AdminDashboard";
import AdminSettings from "./Components/AdminHome/AdminPages/Settings/Settings";
import AdminStudentList from "./Components/AdminHome/AdminPages/StudentDetails/StudentDetails";
import AdminJobPosts from "./Components/AdminHome/AdminPages/JobPosts/JobPosts";
import AdminManageTrainings from "./Components/AdminHome/AdminPages/ManageTraining/Training";
import ApplicationList from "./Components/AdminHome/AdminPages/JobPosts/applications/ApplicationList";
import UpdateApplication from "./Components/AdminHome/AdminPages/JobPosts/updateApplication/UpdateApplication";
import ApplicationForm from "./Components/AdminHome/AdminPages/JobPosts/newApplicationForm/ApplicationForm";
import CoSignUp from "./Components/CoSignup/coSignup";

function App() {
  const [isDarkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("isDarkMode");
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : false;
  });
  const [login, setLogin] = useState(() => {
    const savedLogin = localStorage.getItem("login");
    return savedLogin !== null ? JSON.parse(savedLogin) : false;
  });

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(login));
  }, [login]);

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    fetch("http://localhost:8080")
      .then((response) => {
        if (response.ok) {
          console.log("Server is accessible");
        } else {
          console.log("Server responded, but with an error status");
        }
      })
      .catch((error) => {
        console.log("Server is not accessible", error);
      });
  }, []);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  const themeClass = isDarkMode ? "dark-theme" : "light-theme";

  return (
    <div className={themeClass}>
      <Routes>
        <Route
          path="/"
          element={
            <Signin
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              setLogin={setLogin}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route
          path="/coSignup"
          element={
            <CoSignUp isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route
          path="adminHome"
          element={
            <AdminHome
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              login={login}
              setLogin={setLogin}
            />
          }
        >
          <Route path="adminDashboard" element={<AdminDashboard />} />

          <Route path="adminJobPosts" element={<AdminJobPosts />}>
            <Route path="applicationList" element={<ApplicationList />} />
          </Route>
          <Route path="applicationForm" element={<ApplicationForm />} />
          <Route path="updateApplication" element={<UpdateApplication />} />

          <Route path="adminStudentList" element={<AdminStudentList />} />
          <Route path="adminTrainings" element={<AdminManageTrainings />} />
          <Route path="adminSettings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
