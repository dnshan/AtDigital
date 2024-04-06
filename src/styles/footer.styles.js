import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #6B3CC9;
  height: 220px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const UpperContainer = styled.div`
  display: flex;
  flex-direction: row; /* Aligns the three containers side by side */
  justify-content: space-around; /* Adjust as needed for spacing */
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; // Center align items for smaller screens
  }
`;

export const LeftContainer = styled.header`
  display: flex;
  flex-direction:column ;
  justify-content: flex-start;
  align-items: flex-start;

  h5{
    max-width: 250px;
    color: white;
    text-align: justify;
    margin: 0px 5px;
  }
`;

export const MiddleContainer = styled.header`
color: white;
  display: flex;
  flex-direction:column ;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 35px 0px ;
`;

export const RightContainer = styled.header`
color: white;
  display: flex;
  flex-direction:column ;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 35px 0px ;
`;

// export const TextContainer = styled.header`
//   display: flex;
//   flex-direction:column ;

// `;


export const LowerContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center children horizontally */
  width: 100%; /* Ensure it spans the full width */
  color: white;
  margin: 10px 0; /* Adjust as needed */
`;



export const HorizontalLine = styled.div`
  width: 100%; /* Temporarily set to 100% to test visibility */
  max-width: 600px; /* Adjust based on your layout's maximum width */
  height: 2px;
  background-color: white;
  margin: 0 auto; /* Center the line */
`;



export const TechList = styled.ul`
  list-style-type: none; 
  padding: 0; 
  margin: 0; 
  
  li {    
    margin-bottom: 5px; 
  }
`;

export const LowerWrapper = styled.div`

display: flex;
flex-direction: row;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center; /* Adjust this as needed */
    width: 100%;
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Adjust this as needed */
    width: 100%;
  }
`;
