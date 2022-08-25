import React from "react";
import Input from "../amount_input/Input";
import styled from "styled-components";

function Dashboard() {
  return (
    <Container>
      <Content>
        <div>
          <Input text="10.00₾"></Input>
          <Input text="10.00x"></Input>
        </div>
        <div>
          <Progress type="range" min="0" max="100" />
          <Progress type="range" min="0" max="100" />
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
`;

const Progress = styled.input`
  width: 297px;
  cursor: pointer;
  -webkit-appearance: none;
  height: 6px;
  margin-bottom: 10px;
  background: linear-gradient(
    270deg,
    #45397c 21.15%,
    #ddd3f8 48.23%,
    #44377b 83.65%
  );
  border-radius: 5px;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 1px solid #214834;
    box-shadow: 0px 0px 6px rgba(23, 174, 67, 0.8);
    transition: background .3s ease-in-out;
  }
`;
