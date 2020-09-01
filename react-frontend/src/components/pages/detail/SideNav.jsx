import React from "react";

import { Nav, Image } from "react-bootstrap";
// import { useLocation } from 'react-router-dom'


export default function SideNav() {
  let path = "/detail";
  // let path = useLocation().pathname;
  
  return (
    <Nav defaultActiveKey={path + "/new"} className='flex-column'>
      <Image src=""/>     
      <Nav.Link href={path + "/today"}>Today's</Nav.Link>
      <Nav.Link href={path + "/summery"}>New</Nav.Link>
      <Nav.Link href={path + "/history"}>History</Nav.Link>
      <Nav.Link href={path + "/settings"}>Settings</Nav.Link>
      {/* <Nav.Link href='link-1'>Link</Nav.Link> */}
    </Nav>
  );
}
