import React from 'react';
import styled from "styled-components";
import SocialButton from "../features/SocialButton";
import {FaDiscord, FaGithub, FaItchIo, FaTwitter, FaYoutube} from "react-icons/fa";


const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  white-space: nowrap;
  backdrop-filter: blur(20px);
  background: rgba(255, 250, 240, 0.8);
  font-size: calc(10px + 2vmin);
  border-radius: 0.5vmax;
  box-sizing: border-box;
  min-height: 4vmax;
  left: 1.125vmax;
  padding: 0 1vmax 0 0;
  right: 1.125vmax;
  top: 1.125vmax;

`;

const Header: React.FC = () => {
  return (
    <StyledNav>
      <SocialButton url="https://github.com/Praytic/youtd2/contribute" logo={FaGithub} text={"CONTRIBUTE"}/>
      <SocialButton url="https://praytic.itch.io/youtd2/devlog" logo={FaItchIo} text={"DEVLOG"}/>
      <SocialButton url="https://www.youtube.com/@YouTD2-zj5be" logo={FaYoutube} text={"YOUTUBE"}/>
      <SocialButton url="https://twitter.com/Icob2Games" logo={FaTwitter} text={"TWITTER"}/>
      <SocialButton url="https://discord.gg/EksA2CfCS9" logo={FaDiscord} text={"COMMUNITY"}/>
    </StyledNav>
  );
};

export default Header;
