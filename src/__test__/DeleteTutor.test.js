import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../app/store';
import DeleteTutor from '../pages/DeleteTutor';

it('should render AddTutor page', () => {
  const deleteTutor = render(
    <BrowserRouter>
      <Provider store={store}>
        <DeleteTutor />
      </Provider>
    </BrowserRouter>,
  );
  expect(deleteTutor).toMatchSnapshot();
});
