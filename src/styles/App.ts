import styled from 'styled-components';

export const Container = styled.div`
  display: flex; /*Utilizei flexbox ao invés de css grid porque a lista é unidimensional.
  Se o layout fosse bidimensional, seria melhor usar CSS grid ou uma combiação dos dois*/
  flex-flow: column nowrap;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: left;
  }
`;

export const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.div`
  width: auto;
  height: 100px;
  margin: 2px;
  text-align: center;
  line-height: 100px;
  font-weight: bold;
  font-family: Helvetica, sans-serif;
  font-size: 1em;
  color: #536878;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  select {
    margin: 5px;
    padding: 12px 30px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    background-color: black;
    border-color: white;
    color: white;
  }
  button {
    margin: 5px;
    background-color: black;
    border-color: white;
    color: white;
    padding: 10px 24px;
    border-radius: 4px;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
