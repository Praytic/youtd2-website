import React from 'react';
import styled from 'styled-components'
import {IconType} from "react-icons";

const Button = styled.button`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: black;
  font-size: 1.2vmax;
  cursor: pointer;
  transition: 0.3s;
  font-family: 'Titillium Web', sans-serif;

  @media screen and (max-width: 1080px) {
    font-size: 12px;
  }

  &:hover {
    color: #8d0808;
    text-shadow: 0 0 1vmax white;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

interface SocialButtonProps {
  url: string;
  logo: IconType;
  text: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ url, logo, text}) => {
  const Icon = styled(logo)`
    margin-right: 10px;
    @media screen and (max-width: 1080px) {
      height: 21px !important;
      width: 21px !important;
    }

  `;
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Button>
        <>
          <Icon size={"2vmax"} />
          {text}
        </>
      </Button>
    </Link>
  );
};


export default SocialButton;
