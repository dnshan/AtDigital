import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #6B3CC9;
  height: 220px;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-area: 
  "a b c"
  "d e f"
  "g g g"
  "h h h"
  
  ; */  

  /* LogoStyle{
    grid-area: a;
  } */

  h3{
    color: white;
  }

  /* h4{
    color: white;
  }

  h5{
    color: white;
    
  } */
`;

export const UpperContainer = styled.header`
  display: flex;
  flex-direction:row ;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 150px 5px 35px ;
`;

export const MiddleContainer = styled.header`
  display: flex;
  flex-direction:row ;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 35px 0px ;

  h5{
    color: white;
    text-align: justify;
    margin: 0px 5px;
  }
`;

export const TextContainer = styled.header`
  display: flex;
  flex-direction:column ;

`;


export const LowerContainer = styled.header`
  display: flex;
  flex-direction:row ;
  justify-content: center;
  align-items: flex-end;

  h4{
    color: white;
    margin: 10px  ;
  }
`;


export const HorizontalLine = styled.div`
  width: 550px; 
  height: 2px; 
  background-color: white; 
  margin-top: 5px;
  margin-left: 350px;
 
`;

export const TechList = styled.ul`
  list-style-type: none; 
  padding: 0; 
  margin: 0; 
  color: white;

  li {    
    margin-bottom: 5px; 
  }
`;

