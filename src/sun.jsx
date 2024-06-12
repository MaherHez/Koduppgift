import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const waveAnimation = keyframes`
  0% { border-radius: 50%; transform: scale(1) rotate(0deg); background: linear-gradient(145deg, #FFDD57, #FFB347); }
  10% { border-radius: 49%; transform: scale(0.97) rotate(15deg); background: linear-gradient(145deg, #FFD957, #FFB547); }
  20% { border-radius: 48%; transform: scale(0.94) rotate(30deg); background: linear-gradient(145deg, #FFD557, #FFB747); }
  30% { border-radius: 47%; transform: scale(0.91) rotate(45deg); background: linear-gradient(145deg, #FFD157, #FFB947); }
  40% { border-radius: 46%; transform: scale(0.88) rotate(60deg); background: linear-gradient(145deg, #FFCD57, #FFBB47); }
  50% { border-radius: 45%; transform: scale(0.85) rotate(75deg); background: linear-gradient(145deg, #FFCD57, #FFBD47); }
  60% { border-radius: 44%; transform: scale(0.83) rotate(90deg); background: linear-gradient(145deg, #FFCD57, #FFBF47); }
  70% { border-radius: 45%; transform: scale(0.85) rotate(75deg); background: linear-gradient(145deg, #FFCD57, #FFBD47); }
  80% { border-radius: 46%; transform: scale(0.88) rotate(60deg); background: linear-gradient(145deg, #FFCD57, #FFBB47); }
  90% { border-radius: 48%; transform: scale(0.94) rotate(45deg); background: linear-gradient(145deg, #FFD157, #FFB947); }
  100% { border-radius: 50%; transform: scale(1) rotate(0deg); background: linear-gradient(145deg, #FFDD57, #FFB347); }
`;

const StyledSun = styled.nav`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  background: linear-gradient(145deg, #FFDD57, #FFB347);
  border: 2px solid orange;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${waveAnimation} 15s ease-in-out infinite;
`;

function Sun() {
  return (
    <StyledSun as={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 5.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      aria-label="Animated sun"
    ></StyledSun>
  );
}

export default Sun;
