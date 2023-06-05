import React from 'react';
import styled, {keyframes} from 'styled-components';

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const FloatImage = styled.img`
  z-index: 0;
  position: absolute;
  pointer-events: none;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: 0.5s;
  display: block;
  height: 30vw;
  min-height: 150px;
`;

interface FloatingElementProps {
  src: string;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ src }) => {
  return <FloatImage src={src}/>;
}

export default FloatingElement;
