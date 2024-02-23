import React, { useState } from "react";
import "./jobPost.css";
import BreifcaseIcon from "@rsuite/icons/legacy/Briefcase";
import { Header } from "rsuite";
import { Nav } from "rsuite";
import { Link, Outlet } from "react-router-dom";

const Navbar = ({ active, onSelect, ...props }) => {
  const NavLink = React.memo(
    React.forwardRef(({ href, children, ...rest }, ref) => (
      <Link ref={ref} to={href} {...rest}>
        {children}
      </Link>
    ))
  );

  return (
    <Nav
      {...props}
      activeKey={active}
      onSelect={onSelect}
      style={{
        marginBottom: 50,
        width: "80vw",
        fontSize: "20px",
      }}
    >
      <Nav.Item
        as={NavLink}
        href="applicationList"
        eventKey="Applications"
        style={{ width: "40vw", padding: "auto" }}
      >
        Applications
      </Nav.Item>
      <Nav.Item
        as={NavLink}
        href="applicationForm"
        eventKey="NewApplication"
        style={{ width: "40vw" }}
      >
        New Application
      </Nav.Item>
    </Nav>
  );
};

function AdminJobPosts() {
  const [active, setActive] = useState("Applications");
  return (
    <div className="jobPost">
      <Header style={{ width: "80vw", marginBottom: "2vh" }}>
        <h1>
          <BreifcaseIcon color="gray-600" /> Jobs
        </h1>
      </Header>
      <Navbar appearance="subtle" active={active} onSelect={setActive} />
      <div className="jobPostBody">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminJobPosts;
