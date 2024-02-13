import React from "react";
import "./Menu.css";
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
  const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
  ));

  return (
    <div className="sideNavBar">
      <Sidenav expanded={expanded}>
        <Sidenav.Header>
          <Disclosure>
            <div className="flex items-center bg-gray-800 pb-1">
              <Disclosure.Button
                className="inline-flex items-center justify-center p-2 m-[1.5px] text-gray-400 hover:ring-2 hover:ring-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset h-[49px] w-[54px]"
                onClick={toggleMenu}
              >
                {expanded ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-8" aria-hidden="true" />
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
              >
                {expanded ? "CPMS" : ""}
              </div>
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
            >
              Manage Trainings
            </Nav.Item>
            <Nav.Item
              as={NavLink}
              href="company"
              eventKey="5"
              icon={<Building />}
            >
              Company
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
