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
  flex: 1 0 auto; /* This will make the Content take up all the available space, pushing the Footer to the bottom */
  background: url('${background}') no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  justify-content: center;
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
