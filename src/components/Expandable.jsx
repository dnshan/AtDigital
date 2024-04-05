import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  margin: 20px;
`;

const Title = styled.div`
  cursor: pointer;
  font-weight: bold;
  color: ${props => props.isOpen ? '#6B3CC9' : 'black'};
`;

const Content = styled.div`
width: 400px;
  padding: 10px;
  margin-top: 5px;
  text-align: justify;
`;

const Expandable = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Title onClick={toggleOpen} isOpen={isOpen}>
        {title} {isOpen ? '-' : '+'}
      </Title>
      {isOpen && <Content>{children}</Content>}
    </Container>
  );
};

export default Expandable;
