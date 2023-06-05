import React from 'react';
import Header from './components/Header';
import GamePage from './components/HomePage';
import './App.css';
import styled from "styled-components";
import background from "./assets/images/background.png";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  background: url('${background}') no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  @media screen and (max-height: 640px) {
    height: inherit;
  }
`;

const App: React.FC = () => {
  return (
    <MainContainer>
      <Header/>
      <GamePage />
    </MainContainer>
  );
};

export default App;
