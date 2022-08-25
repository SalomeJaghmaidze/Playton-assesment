import React from "react";
import Tabs from "../tabs/Tabs";
import styled from "styled-components";
import Ranges from "../ranges/Ranges";

function Auto() {
  return (
    <Content>
      <div>
        <Ranges
          title="Auto Bet"
          type="₾"
          max="500"
          amountStep="0.5"
          tofixedValue="2"
        ></Ranges>
        <Ranges
          title="Auto Cashout"
          type="x"
          max="30000"
          amountStep="1"
          tofixedValue="2"
        ></Ranges>
      </div>
      <Btn>BET</Btn>
    </Content>
  );
}

export default Auto;

const Content = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`;

const Btn = styled.button`
  background-color: #17ae43;
  color: white;
  width: 665px;
  height: 72px;
  border-radius: 8px;
  font-size: 28px;
  cursor: pointer;
`;
