import React from "react";
import styled from "styled-components";
import Ranges from "../../shared/ranges/Ranges";

function Auto() {
  return (
    <Content>
      <Section>
        <Ranges
          title="Auto Bet"
          type="₾"
          max="500"
          amountStep="0.5"
          toFixedValue="2"
        ></Ranges>
        <Ranges
          title="Auto Cashout"
          type="x"
          max="30000"
          amountStep="1"
          toFixedValue="2"
        ></Ranges>
      </Section>
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
  width: 100%;
  height: 72px;
  border-radius: 8px;
  font-size: 28px;
  border: none;
  cursor: pointer;

  @media (max-width: 1008px) {
    font-size: 18px;
    height: 50px;
  }
`;

const Section = styled.div`
  gap: 10px;
  @media (max-width: 1008px) {
    flex-direction: column;
  }
`;
