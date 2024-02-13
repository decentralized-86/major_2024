import React, { useState, useEffect } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Header/Header";
import SideNavBar from "../Menu/Menu";
import { useNavigate, Outlet } from "react-router-dom";
import { Container, Content } from "rsuite";

function Home({ isDarkMode, toggleDarkMode }) {
  const [expanded, setExpanded] = React.useState(true);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state

  useEffect(() => {
    // Replace this with your actual login check
    const userIsLoggedIn = true; // set to false for demonstration

    if (!userIsLoggedIn) {
      navigate("/"); // replace '/login' with your actual login path
      alert("Please login to continue");
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  const toggleMenu = () => {
    setExpanded((prevExpanded) => !prevExpanded); // Toggle expanded state
  };

  return isLoggedIn ? (
    <div className="Home">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="body">
        <div className="sidenav">
          <SideNavBar expanded={expanded} toggleMenu={toggleMenu} />
        </div>
        <div
          className={expanded ? "show-container" : "expanded-show-container"}
          style={{
            margin: "1vh 0vw 0vh 0vw",
            padding: "0vh 0vw 0vh 1vw ",
            height: "90vh",
          }}
        >
          <Container>
            <Content>
              <Outlet />
            </Content>
          </Container>
        </div>
      </div>
    </div>
  ) : null;
}

export default Home;
