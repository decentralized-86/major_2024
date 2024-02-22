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
import Location from "./Components/Auth/SignUp/Location/Location";
import Links from "./Components/Auth/SignUp/Links/Link";
import StudentDetails from "./Components/Auth/SignUp/StudentDetails/StudentDetails";
import { FormValueProvider } from "./Components/Auth/SignUp/FormValueContext";

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
            <FormValueProvider>
              <SignUp isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </FormValueProvider>
          }
        >
          <Route path="studentdetails" element={<StudentDetails />} />
          <Route path="location" element={<Location />} />
          <Route path="links" element={<Links />} />
        </Route>
        <Route
          path="home"
          element={
            <AdminHome
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              login={login}
              setLogin={setLogin}
            />
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="drives" element={<AdminJobPosts />} />
          <Route path="student" element={<AdminStudentList />} />
          <Route path="trainings" element={<AdminManageTrainings />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
