import React from 'react';
import styled from "styled-components";
import PlayButton from "../features/PlayButton";


const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 90%;
  @media screen and (max-width: 1080px) {
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  
  @media screen and (max-height: 640px) {
    min-height: 250px;
  }
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const PlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
  margin-bottom: 250px;
`

const Title = styled.h1`
  color: white;
  font-size: 2em+1vmax;
  text-align: center;
  margin-bottom: 1em;
  font-family: 'Black Han Sans', sans-serif;
  text-transform: uppercase;
  text-shadow: 0 0.3px rgba(0, 0, 0, 0.2);
  user-select: none;
`;

const Subtitle = styled.h2`
  color: #f6dfa6;
  font-size: 1.5em+1vmax;
  text-align: center;
  margin-bottom: 1em;
  user-select: none;
  font-family: 'Friz Quadrata', sans-serif;
`;

const Description = styled.p`
  color: floralwhite;
  font-size: 1em+1vmax;
  text-align: center;
  line-height: 1.5em;
  user-select: none;
  font-family: 'Friz Quadrata', sans-serif;
`;

const HomePage: React.FC = () => {
  return (
    <RowContainer>
      <Container>
        <Title>The kingdom is under attack!</Title>
        <Subtitle>Gather your forces and face the hordes of evil in the most acclaimed tower defense ever!</Subtitle>
        <Description>Unchain the power of the strongest towers and test your might against bloodthirsty orcs, mountain
          trolls, evil necromancers, scores of demons, and more on a quest to save the Kingdom from the evil hands of
          Vez’Nan</Description>
      </Container>
      <PlayContainer>
        <PlayButton/>
      </PlayContainer>
      <Container>
        <Title>The kingdom is under attack!</Title>
        <Subtitle>Gather your forces and face the hordes of evil in the most acclaimed tower defense ever!</Subtitle>
        <Description>Unchain the power of the strongest towers and test your might against bloodthirsty orcs, mountain
          trolls, evil necromancers, scores of demons, and more on a quest to save the Kingdom from the evil hands of
          Vez’Nan</Description>
      </Container>
    </RowContainer>
  );
};

export default HomePage;
