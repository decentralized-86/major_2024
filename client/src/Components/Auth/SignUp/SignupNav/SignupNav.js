import React from "react";
import "./SignupNav.css";
import { Sidenav, Nav } from "rsuite";
import MapMarker from "@rsuite/icons/legacy/MapMarker";
import GroupIcon from "@rsuite/icons/legacy/Group";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import LinkIcon from "@rsuite/icons/legacy/Link";

const SignupNav = ({}) => {
  const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
  ));

  return (
    <div className="SignupNav">
      <Sidenav>
        <Sidenav.Body>
          <Nav>
            <Nav.Item
              as={NavLink}
              href="studentdetails"
              eventKey="1"
              icon={<GroupIcon />}
            >
              Student Details
            </Nav.Item>
            <Nav.Item
              as={NavLink}
              href="location"
              eventKey="2"
              icon={<MapMarker />}
            >
              Personal Information
            </Nav.Item>
            <Nav.Item
              as={NavLink}
              href="links"
              eventKey="3"
              icon={<LinkIcon />}
            >
              ADD LINKS
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SignupNav;
