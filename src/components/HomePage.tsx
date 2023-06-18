import React from 'react';
import styled from "styled-components";
import PlayButton from "../features/PlayButton";


const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 90%;
  margin-top: 80px;
  @media screen and (max-width: 1080px) {
    justify-content: center;
  }
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  width: calc(33vw - 2em);

  @media screen and (max-height: 640px) {
    min-height: 250px;
  }
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const LeftContainer = styled(Container)`
  text-align: left;
`

const RightContainer = styled(Container)`
  text-align: right;
`

const PlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
  margin-bottom: 350px;
`

const Title = styled.h1`
  color: white;
  font-size: 2em+1vmax;
  margin-bottom: 1em;
  font-family: 'Black Han Sans', sans-serif;
  text-transform: uppercase;
  text-shadow: 0 2px rgba(0, 0, 0, 0.4);
  user-select: none;
`;

const Subtitle = styled.h2`
  color: #ffffff;
  font-size: 1.5em+1vmax;
  margin-bottom: 1em;
  user-select: none;
  font-family: 'Friz Quadrata', sans-serif;
  text-shadow: 0 1px rgba(0, 0, 0, 0.2);
`;

const HomePage: React.FC = () => {
  return (
    <RowContainer>
      <LeftContainer>
        <Title>Participate in the Revival of YouTD</Title>
        <Subtitle>Become part of the development process for YouTD 2, a community-driven tower defense game. As an early tester, your feedback can contribute to our inaugural release.</Subtitle>
      </LeftContainer>
      <PlayContainer>
        <PlayButton/>
      </PlayContainer>
      <RightContainer>
        <Title>Towers just like heroes in RPG</Title>
        <Subtitle>In YouTD 2, your towers can advance in levels, gain new abilities, and play distinct roles. Harness the power of elemental combinations and utilize looted items and oils to boost your towers.</Subtitle>
      </RightContainer>
    </RowContainer>
  );
};

export default HomePage;
