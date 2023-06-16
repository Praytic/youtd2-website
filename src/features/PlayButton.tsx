import React, {useState} from 'react';
import styled from 'styled-components'

const Button = styled.button`
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  user-select: none;
  font-family: "Black Han Sans", sans-serif;
  border: 0.18rem solid #712507;
  border-radius: 0.5rem;
  padding: 0.8rem 1.8rem;
  color: #fff;
  font-size: 1.25rem;
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-color: #E8551C;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.75);
  transition-property: background-color;
  transition-duration: 0.3s;
  min-width: 300px;
  text-indent: -20px;
  padding-right: 2.3rem;
  text-decoration: none;
  outline: none;

  &:disabled {
    filter: contrast(0.2);
  }
`;

interface PlayButtonProps {
  gameProps?: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ gameProps}) => {
  const [gameStarted, setGameStarted] = useState(false);
  const startGame = () => {
    setGameStarted(true);
    // Here you would implement the logic to start the game
  };
  // const isMacOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  return (
    // <Button onClick={startGame} disabled={isMacOS}>PLAY</Button>
    <a href={process.env.PUBLIC_URL + "/game/index.html"} onClick={startGame}>
      <Button disabled={gameStarted}>PLAY</Button>
    </a>
  );
};


export default PlayButton;
