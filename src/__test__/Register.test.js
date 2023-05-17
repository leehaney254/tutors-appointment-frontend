import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../app/store';
import Register from '../pages/auth/Register';

it('should render Register page', () => {
  const register = render(
    <BrowserRouter>
      <Provider store={store}>
        <Register />
      </Provider>
    </BrowserRouter>,
  );
  expect(register).toMatchSnapshot();
});
