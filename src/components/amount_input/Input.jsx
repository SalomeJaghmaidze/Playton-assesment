import React, { useState } from "react";
import styled from "styled-components";

function Input(props) {
  const [input, setinput] = useState(10.0);
  function handleChange(event) {
    setinput(parseFloat(event.target.value));
  }
  function DeacreaseInput() {
    if (input > 0) {
      setinput((prevInput) => prevInput - parseFloat(props.amountStep));
    }
  }
  function IncreaseInput() {
    if (input < props.max) {
      setinput((prevInput) => prevInput + parseFloat(props.amountStep));
    }
  }
  return (
    <Wrapper>
      <Bar>
        <Decrease onClick={DeacreaseInput}>-</Decrease>
        <p>
          {input.toFixed(props.tofixedValue)}
          {props.type}
        </p>
        <Increase onClick={IncreaseInput}>+</Increase>
      </Bar>
      <Title>{props.title}</Title>
      <div>
        <Progress
          type="range"
          min="0"
          max={props.max}
          value={input}
          onChange={handleChange}
        />
      </div>
    </Wrapper>
  );
}

export default Input;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  color: white;
  font-size: 10px;
`;

const Bar = styled.div`
  color: white;
  background-color: #160f37;
  width: 324px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
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
  border: none;
  cursor: pointer;
`;

const Increase = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: white;
  font-size: 25px;
  background-color: #2eb550;
  margin-right: 5px;
  border: none;
  cursor: pointer;
`;

const Progress = styled.input`
  width: 297px;
  cursor: pointer;
  -webkit-appearance: none;
  height: 6px;
  margin-bottom: 10px;
  margin-top: 10px;
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
    background: #ffffff;
    border: 1px solid #214834;
    box-shadow: 0px 0px 6px rgba(23, 174, 67, 0.8);
    transition: background 0.3s ease-in-out;
  }
`;
