import React, { FormEvent, useCallback, useEffect, useState } from 'react';

import api from './services/api';
import People from './components/People';
import { Container, FormContainer, Item, Img } from './styles/App';
import GlobalStyle from './styles/global';
import starWarsImg from './assets/starwars.png';

interface Person {
  name: string;
  eye_color: string;
}

const App: React.FC = () => {
  const [person, setPerson] = useState<string>('');
  const [peoples, setPeoples] = useState<Person[]>([]);

  const loadPeoples = useCallback(async () => {
    const response = await api.get('people');
    setPeoples(response.data.results);
  }, []);

  useEffect(() => {
    loadPeoples();
  }, [loadPeoples]);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      const newPeoples = peoples.filter(p => p.name !== person);
      setPerson('');
      setPeoples(newPeoples);
    },
    [peoples, person],
  );

  return (
    <div>
      <Img src={starWarsImg} alt="Star Wars" />
      <Container data-testid="container">
        {peoples.map(people => (
          <Item key={people.name} data-testid="item">
            <People name={people.name} eye_color={people.eye_color} />
          </Item>
        ))}
      </Container>

      <FormContainer onSubmit={handleSubmit}>
        <select
          className="dropdown"
          value={person}
          onChange={event => setPerson(event.target.value)}
        >
          <option disabled value="">
            Escolha um personagem
          </option>
          {peoples.map(people => (
            <option key={people.name} value={people.name}>
              {people.name}
            </option>
          ))}
        </select>
        <button type="submit">Remover da Lista</button>
      </FormContainer>
      <GlobalStyle />
    </div>
  );
};

export default App;
