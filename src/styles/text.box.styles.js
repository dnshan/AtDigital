import styled from 'styled-components';

export const TextBoxStyles = styled.div`
display: flex;
flex-direction: column;

h3{
    color: #6B3CC9;
}

h6{
    text-align: justify;
    
}

Button{
    width: 100px;
    height: 30px;
}

@media (max-width: 375px) {
    Button {
      align-self: center; 
      width: auto; 
      
    }
}

`;