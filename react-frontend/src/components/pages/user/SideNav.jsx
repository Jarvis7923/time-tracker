import React from "react";
import { Nav, Image } from "react-bootstrap";
// import { useLocation } from 'react-router-dom'
import userDefaultImage from "./default-user-icon.jpg";

export default function SideNav() {
  let path = "/user";
  // let path = useLocation().pathname;
  
  return (
    <Nav defaultActiveKey={path + "/new"} className='flex-column' style={{textAlign:"center"}}>
      <Image src={userDefaultImage} roundedCircle fluid style={{width:"50pt", margin:"auto"}}/>     
      <Nav.Link href={path + "/today"}>Today's</Nav.Link>
      <Nav.Link href={path + "/summary"}>Summery</Nav.Link>
      <Nav.Link href={path + "/history"}>History</Nav.Link>
      <Nav.Link href={path + "/settings"}>Settings</Nav.Link>
      {/* <Nav.Link href='link-1'>Link</Nav.Link> */}
    </Nav>
  );
}
