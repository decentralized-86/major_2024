import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./Components/Auth/Signin";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import Settings from "./Components/Settings/Settings";
import Student from "./Components/StudentDetails/Student";
import Drives from "./Components/ManageDrives/Drives";
import Trainings from "./Components/ManageTraining/Training";
import Company from "./Components/ManageCompany/Company";

function App() {
  const [isDarkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  const themeClass = isDarkMode ? "dark-theme" : "light-theme";

  return (
    <div className={themeClass}>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route
          path="home"
          element={
            <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="drives" element={<Drives />} />
          <Route path="student" element={<Student />} />
          <Route path="trainings" element={<Trainings />} />
          <Route path="company" element={<Company />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
