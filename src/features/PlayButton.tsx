import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

const Warning = styled.div`
  position: absolute;
  padding: 20px 200px;
  min-width: 300px;
  left: 50%;
  transform: translate(-50%, 0);
  color: #a91b1b;
  font-size: 1.5em+1vmax;
  margin-bottom: 1em;
  user-select: none;
  font-family: 'Friz Quadrata', sans-serif;
  text-shadow: 0 1px rgba(0, 0, 0, 0.2);
`

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
  const [disabled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const startGame = () => {
    if (!disabled) {
      setGameStarted(true);
      // Here you would implement the logic to start the game
    }
  };

  // Check platform/browser conditions
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
    const isMacOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const browser = navigator.appVersion;
    const edgeVersion = browser.indexOf('Edge/') > -1 ? parseInt(browser.split('Edge/')[1]) : Infinity;
    const chromeVersion = browser.indexOf('Chrome/') > -1 ? parseInt(browser.split('Chrome/')[1]) : Infinity;
    const firefoxVersion = browser.indexOf('Firefox/') > -1 ? parseInt(browser.split('Firefox/')[1]) : Infinity;
    const operaVersion = browser.indexOf('Opera/') > -1 ? parseInt(browser.split('Opera/')[1]) : Infinity;
    const safariVersion = browser.indexOf('Safari/') > -1 ? parseInt(browser.split('Safari/')[1]) : Infinity;

    if (isMobile) {
      setDisabled(true);
      setErrorMessage("Current version of the game doesn't support mobile user experience.");
    } else if (isMacOS) {
      setErrorMessage("Current version of the game has known issues for users with your platform. Please download the game <here> if you experience any issues during loading.");
    } else if (edgeVersion < 79 || chromeVersion < 68 || firefoxVersion < 79 || operaVersion < 55 || safariVersion < 15.2) {
      setDisabled(true);
      setErrorMessage("You have unsupported browser version. Please update your browser.");
    }
  }, []);

  return (
    <div>
      <a href={process.env.PUBLIC_URL + "/game/index.html"} onClick={startGame}>
        <Button disabled={gameStarted || disabled}>PLAY</Button>
      </a>
      <Warning>{errorMessage}</Warning>
    </div>
  );
};


export default PlayButton;
