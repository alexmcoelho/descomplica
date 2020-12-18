import React from 'react';
import { render, waitFor, within } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import App from '../App';
import api from '../services/api';

const apiMock = new MockAdapter(api);

describe('App test', () => {
  it('Total people = 10', async () => {
    const apiResponse = {
      results: [
        { name: 'Name 1', eye_color: 'blond' },
        { name: 'Name 2', eye_color: 'yellow' },
        { name: 'Name 3', eye_color: 'green' },
        { name: 'Name 4', eye_color: 'blue' },
        { name: 'Name 5', eye_color: 'purple' },
        { name: 'Name 6', eye_color: 'black' },
        { name: 'Name 7', eye_color: 'red' },
        { name: 'Name 8', eye_color: 'orange' },
        { name: 'Name 9', eye_color: 'pink' },
        { name: 'Name 10', eye_color: 'silver' },
      ],
    };
    apiMock.onGet('people').reply(200, apiResponse);

    const { getByTestId } = render(<App />);
    const appHeader = getByTestId('container');
    await waitFor(() => {
      const clocksInHeader = within(appHeader).getAllByTestId('item');
      expect(clocksInHeader.length).toBe(10);
    });
  });
});
