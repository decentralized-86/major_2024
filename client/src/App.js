import "./App.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./Components/Auth/Signin/Signin";
import SignUp from "./Components/Auth/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/AdminPages/Dashboard/Dashboard";
import Settings from "./Components/AdminPages/Settings/Settings";
import StudentListTable from "./Components/AdminPages/StudentDetails/Student";
import Drives from "./Components/AdminPages/ManageDrives/Drives";
import Trainings from "./Components/AdminPages/ManageTraining/Training";
import Location from "./Components/Auth/SignUp/Location/Location";
import Links from "./Components/Auth/SignUp/Links/Link";
import StudentDetails from "./Components/Auth/SignUp/StudentDetails/StudentDetails";
import { FormValueProvider } from "./Components/Auth/SignUp/FormValueContext";

function App() {
  const [isDarkMode, setDarkMode] = React.useState(false);

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
            <Signin isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
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
            <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="drives" element={<Drives />} />
          <Route path="student" element={<StudentListTable />} />
          <Route path="trainings" element={<Trainings />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
