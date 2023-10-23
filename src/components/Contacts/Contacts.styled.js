
import styled from 'styled-components';

export const Table = styled.table`
  margin: 10px auto;
  width: 400px;
  display: flex;
  justify-content: center;


  & td {
    padding: 7px;
    text-align: left;
    color: black;
  }

  & td:first-child {
    font-weight: bold;
  }

  & button {
    padding: 8px 10px;
    background-color: #f0f0f0;
    border: 0px;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 200ms ease-in-out, background-color 200ms ease-in;
  }

  & button:hover {
    background-color: #1a73e8;
    color: white;
    transform: scale(1.05);
  }
`;
