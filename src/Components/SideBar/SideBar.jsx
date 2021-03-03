import React from "react";
import { List, Logo, Wrapper } from "./SideBar.style";
import logo from "../../img/Logo.png";
import SideBarItem from "./SideBarItem"



const SideBar = () => {
  return (
    <Wrapper>
      <a href="#">
        <Logo src={logo} alt="" />
      </a>
      <List>
          <SideBarItem img={img} text="overview"/>
      </List>
    </Wrapper>
  );
};

export default SideBar;
