import React from "react";
import "./SignupNav.css";
import { Sidenav, Nav } from "rsuite";
import MapMarker from "@rsuite/icons/legacy/MapMarker";
import GroupIcon from "@rsuite/icons/legacy/Group";
import Paperclip from "@rsuite/icons/legacy/Paperclip";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import LinkIcon from "@rsuite/icons/legacy/Link";
import logo from "../../../Header/Logo/2.png";

const SignupNav = ({}) => {
  const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
  ));

  return (
    <div className="sideNavBar">
      <Sidenav>
        <Sidenav.Header>
          <Disclosure>
            <div
              className="flex items-center bg-gray-800 pb-1 pl-9 "
              style={{
                fontWeight: "bolder",
                fontSize: "30px",
                color: "White",
                textAlign: "center",
              }}
            >
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-9 w-auto"
                    src={logo}
                    alt="CPMS"
                  />
                  <img
                    className="hidden lg:block h-9 w-auto"
                    src={logo}
                    alt="CPMS"
                  />
                </div>
                <div className="pl-2">CPMS</div>
              </div>
            </div>
          </Disclosure>
        </Sidenav.Header>
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
