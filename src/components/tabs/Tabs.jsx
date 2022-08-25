import React, { useState } from "react";
import styled from "styled-components";
import Auto from "../auto/Auto";
import Game from "../game/Game";

function Tabs() {
  const [activeTab, setActiveTab] = useState("tab2");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  return (
    <Nav>
      <List>
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Game
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Auto
        </li>
      </List>

      <Outlet>{activeTab === "tab1" ? <Game /> : <Auto />}</Outlet>
    </Nav>
  );
}

export default Tabs;

const Nav = styled.div`
  width: 689px;
  display: flex;
  margin-top: 10px;
  border-radius: 2rem;
  height: 36px;
  color: rgba(255, 255, 255, 0.3);
`;

const List = styled.ul`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(56, 46, 112, 0.2);
  border-radius: 6px;
  padding-left: 0px;

  li {
    width: 105px;
    padding: 9px;
    list-style: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.7s;
    font-size: 16px;
  }

  .active {
    color: #ffffff;
    background: #160f37;
    border-radius: 6px;
  }
`;
const Outlet = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
