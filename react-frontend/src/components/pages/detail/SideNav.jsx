import React from "react";

import { Nav } from "react-bootstrap";
// import { useLocation } from 'react-router-dom'



export default function SideNav() {
  let path = "/detail";
  // let path = useLocation().pathname;
  
  return (
    <Nav defaultActiveKey={path + "/new"} className='flex-column'>
      <Nav.Link href={path + "/new"}>New</Nav.Link>
      <Nav.Link href={path + "/history"}>History</Nav.Link>
      <Nav.Link href={path + "/project"}>Project</Nav.Link>
      {/* <Nav.Link href='link-1'>Link</Nav.Link> */}
    </Nav>
  );
}
