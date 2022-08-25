import React from "react";
import Tabs from "../tabs/Tabs";
import styled from "styled-components";

function Dashboard() {
  return (
    <Container>
      <Tabs></Tabs>
      <Content></Content>
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
  width: 689px;
  height: 300px;
  background-color: #0e0826;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;

const Content = styled.div``;
