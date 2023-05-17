import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../app/store';
import AddTutor from '../pages/AddTutor';

it('should render AddTutor page', () => {
  const addTutor = render(
    <BrowserRouter>
      <Provider store={store}>
        <AddTutor />
      </Provider>
    </BrowserRouter>,
  );
  expect(addTutor).toMatchSnapshot();
});
