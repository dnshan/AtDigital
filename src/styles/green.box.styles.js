import styled from 'styled-components';

export const GreenBoxStyle = styled.div`
 position: absolute;
  bottom: 0; 
  left: 0; 
  margin: 50px;
  display: flex;
  flex-direction:column ;
  justify-content: center; 
  align-items: flex-start;
  height: 150px;
  width: 300px;
  background: linear-gradient(to top right, #4DCA79, #1CBDDD);  

    // Modify the width to 100% when the viewport width is 768px or less
    @media (max-width: 768px) {
      position: static;
    width: 100%;
    margin: 0px; // Adjusting margin to keep the bottom and top margins when width is 100%
    }

  h4{
    color: white;
    margin: 10px;

  }

  Button{
    margin: 10px;

  }
  //background: linear-gradient(to bottom, #33ccff, #ff99cc);
  //#1CBDDD
  //#4DCA79


`;