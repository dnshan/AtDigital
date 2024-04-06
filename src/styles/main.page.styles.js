import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;
  }
`;

export const HeaderContainer = styled.header`
  background-color: #6B3CC9;
  display: flex;
  flex-direction:row ;
  justify-content: space-between; 
  align-items: center;
  height: 70px;
  width: 100%;
`;

export const LogoStyle = styled.img`
  width: 200px;
  height: 30px;
  margin: 10px;
`;


export const Image01Style = styled.img`
  width: 100%;
  height: auto;
`;

export const Image02Style = styled.img`
width: 100%;
  max-width: 300px;
  height: auto;
  margin: auto;
`;

export const Image03Style = styled.img`
width: 100%;
  max-width: 300px;
  height: auto;
  margin: auto;
`;

export const SecondContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: flex-start; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; 
  }
`;


export const ThirdContainer = styled.div`
display: flex;
flex-direction: row;
align-items: stretch;
width: 100%;
max-width: 700px;
margin: 20px auto;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;

  }
`;

export const FourthContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
max-width: 700px;
margin: 20px auto;

  @media (max-width: 375px) {
    flex-direction: column;
    & > img {
      order: -1;
    }
  }
`;

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction:column ;
  align-items: center;
`;




