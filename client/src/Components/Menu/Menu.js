import React from "react";
import "./Menu.css";
import { Sidenav, Nav, Button } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [activeKey, setActiveKey] = React.useState("1");

  const toggleMenu = () => {
    setExpanded((prevExpanded) => !prevExpanded); // Toggle expanded state
  };

  return (
    <div style={{ width: 240 }}>
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
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              User Group
            </Nav.Item>
            <Nav.Menu
              placement="rightStart"
              eventKey="3"
              title="Advanced"
              icon={<MagicIcon />}
            >
              <Nav.Item eventKey="3-1">Geo</Nav.Item>
              <Nav.Item eventKey="3-2">Devices</Nav.Item>
              <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
              <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              placement="rightStart"
              eventKey="4"
              title="Settings"
              icon={<GearCircleIcon />}
            >
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Channels</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Navbar;
