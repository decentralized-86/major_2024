import React from "react";
import "./jobPost.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNewJob = () => {
    navigate("/adminHome/applicationForm");
  };

  return (
    <div className="jobPost w-[75vw]">
      <h1 style={{ textAlign: "center", marginBottom: "1vh" }}>Job Posts</h1>
      <Box sx={{ bgcolor: "background.paper" }}>
        <Stack direction="row" spacing={{ md: 108, sm: 40 }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              label="Applications"
              component={Link}
              to="applicationList"
              style={{ textDecoration: "none" }}
            />
            {/*    <Tab
          label="New Application"
            component={Link}
            to="applicationForm"
            style={{ textDecoration: "none" }}
          /> */}
          </Tabs>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            style={{ marginTop: "1vh" }}
            onClick={handleNewJob}
          >
            <AddIcon />
            Add New
          </Fab>
        </Stack>
      </Box>
      <div className="jobPostBody flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import "./jobPost.css";
// import BreifcaseIcon from "@rsuite/icons/legacy/Briefcase";
// import { Header } from "rsuite";
// import { Nav } from "rsuite";
// import { Link, Outlet } from "react-router-dom";

// const Navbar = ({ active, onSelect, ...props }) => {
//   const NavLink = React.memo(
//     React.forwardRef(({ href, children, ...rest }, ref) => (
//       <Link ref={ref} to={href} {...rest}>
//         {children}
//       </Link>
//     ))
//   );

//   return (
//     <Nav
//       {...props}
//       activeKey={active}
//       onSelect={onSelect}
//       style={{
//         marginBottom: 50,
//         width: "75vw",
//         fontSize: "20px",
//       }}
//     >
//       <Nav.Item
//         as={NavLink}
//         href="applicationList"
//         eventKey="Applications"
//         style={{ width: "37.5vw" }}
//       >
//         Applications
//       </Nav.Item>
//       <Nav.Item
//         as={NavLink}
//         href="applicationForm"
//         eventKey="NewApplication"
//         style={{ width: "37.5vw" }}
//       >
//         New Application
//       </Nav.Item>
//     </Nav>
//   );
// };

// function AdminJobPosts() {
//   const [active, setActive] = useState("Applications");
//   return (
//     <div className="jobPost">
//       <Header style={{ width: "80vw", marginBottom: "2vh" }}>
//         <h1>
//           <BreifcaseIcon color="gray-600" /> Jobs
//         </h1>
//       </Header>
//       <Navbar appearance="subtle" active={active} onSelect={setActive} />
//       <div className="jobPostBody">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default AdminJobPosts;
