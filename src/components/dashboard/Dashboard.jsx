import React from "react";
import Input from "../amount_input/Input";
import Tabs from "../tabs/Tabs";
import styled from "styled-components";

function Dashboard() {
  return (
    <Container>
      <Content>
      <Tabs></Tabs>
        <div>
          <Input
            title="Auto Bet"
            type="₾"
            max="500"
            amountStep="0.5"
            tofixedValue="2"
          ></Input>
          <Input
            title="Auto Cashout"
            type="x"
            max="30000"
            amountStep="1"
            tofixedValue="2"
          ></Input>
        </div>
        <Btn>BET</Btn>
      </Content>
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
  width: 689px;
  height: 280px;
  background-color: #0e0826;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direcrion: column;
`;

const Content = styled.div`
  margin: auto;

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


