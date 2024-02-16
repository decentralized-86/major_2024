import React from "react";
import "./SideNavBar.css";
import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import TaskIcon from "@rsuite/icons/Task";
import CalendarIcon from "@rsuite/icons/Calendar";
import GearIcon from "@rsuite/icons/Gear";
import Building from "@rsuite/icons/legacy/Building";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

const SideNavBar = ({ expanded, toggleMenu }) => {
  const NavLink = React.memo(
    React.forwardRef(({ href, children, ...rest }, ref) => (
      <Link ref={ref} to={href} {...rest}>
        {children}
      </Link>
    ))
  );

  return (
    <div className="sideNavBar">
      <Sidenav className="lg:w-[20vw] lg:h-[90vh] " expanded={expanded}>
        <Sidenav.Header>
          <Disclosure>
            <div className="flex items-center bg-gray-800 pb-1 ">
              <Disclosure.Button
                className="inline-flex items-center justify-center  text-gray-400 hover:ring-2 hover:ring-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset h-[45px] w-[55px] ml-[0.125rem]"
                onClick={toggleMenu}
              >
                {expanded ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-8 w-12 " aria-hidden="true" />
                )}
              </Disclosure.Button>
              <div
                style={{
                  width: "9vw",
                  fontWeight: "bolder",
                  fontSize: "30px",
                  color: "White",
                  textAlign: "center",
                }}
              ></div>
            </div>
          </Disclosure>
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav>
            <Nav.Item
              as={NavLink}
              href="dashboard"
              eventKey="1"
              icon={<DashboardIcon />}
            >
              Dashboard
            </Nav.Item>
            <Nav.Item
              as={NavLink}
              href="drives"
              eventKey="2"
              icon={<CalendarIcon />}
            >
              Manage Drives
            </Nav.Item>
            <Nav.Item
              as={NavLink}
              href="student"
              eventKey="3"
              icon={<GroupIcon />}
            >
              Student Details
            </Nav.Item>
            <Nav.Item
              as={NavLink}
              href="trainings"
              eventKey="4"
              icon={<TaskIcon />}
              style={{ paddingRight: "10px" }}
            >
              Manage Trainings
            </Nav.Item>
            <Nav.Item
              as={NavLink}
              href="settings"
              eventKey="6"
              icon={<GearIcon />}
            >
              Settings
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SideNavBar;
