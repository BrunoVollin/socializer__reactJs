import React from "react";
import { List, Logo, Wrapper } from "./SideBar.style";
import logo from "../../img/Logo.png";
import SideBarItem from "./SideBarItem"

import imgOver from "../../img/pngs/overview.png";
import imgLeader from "../../img/pngs/leaderboard.png";
import imgAdm from "../../img/pngs/administration.png";
import imgSales from "../../img/pngs/sales.png";
import imgSchedule from "../../img/pngs/schedule.png";
import imgSpreds from "../../img/pngs/spreadssheets.png";


const SideBar = () => {
  return (
    <Wrapper>
      <a href="#">
        <Logo src={logo} alt="" />
      </a>
      <List>
          <SideBarItem img={imgOver} text="Overview"/>
          <SideBarItem img={imgLeader} text="Leader board"/>
          <SideBarItem img={imgAdm} text="Administration"/>
          <SideBarItem img={imgSales} text="Sales"/>
          <SideBarItem img={imgSchedule} text="Schedule"/>
          <SideBarItem img={imgSpreds} text="Spreads sheets"/>
      </List>
    </Wrapper>
  );
};

export default SideBar;
