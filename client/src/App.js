import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./Components/Auth/Signin/Signin";
import SignUp from "./Components/Auth/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/SideNavBar/SideNavOptions/Dashboard/Dashboard";
import Settings from "./Components/SideNavBar/SideNavOptions/Settings/Settings";
import StudentListTable from "./Components/SideNavBar/SideNavOptions/StudentDetails/Student";
import Drives from "./Components/SideNavBar/SideNavOptions/ManageDrives/Drives";
import Trainings from "./Components/SideNavBar/SideNavOptions/ManageTraining/Training";
import Location from "./Components/Auth/SignUp/Location/Location";
import Links from "./Components/Auth/SignUp/Links/Link";
import StudentDetails from "./Components/Auth/SignUp/StudentDetails/StudentDetails";

function App() {
  const [isDarkMode, setDarkMode] = React.useState(false);

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
            <SignUp isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
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
