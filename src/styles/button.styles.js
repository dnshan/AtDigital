import styled from 'styled-components';

export const ButtonStyle = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  font-size: 10px;
  color: white;
  background-color: #F28D35;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  /* &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  } */
`;