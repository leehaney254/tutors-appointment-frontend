import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../app/store';
import Login from '../pages/auth/Login';

it('should render login page', () => {
  const login = render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>,
  );
  expect(login).toMatchSnapshot();
});
