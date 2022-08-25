import React from "react";
import styled from "styled-components";

function Input(props) {
  return (
    <Bar>
      <Decrease>-</Decrease>
      <p>{props.text}</p>
      <Increase>+</Increase>
    </Bar>
  );
}

export default Input;

const Bar = styled.div`
  color: white;
  background-color: #160f37;
  width: 324px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Decrease = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: white;
  font-size: 25px;
  background-color: #cf0505;
  margin-left: 5px;
`;

const Increase = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: white;
  font-size: 25px;
  background-color: #2eb550;
  margin-right: 5px;
`;
