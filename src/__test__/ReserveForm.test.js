import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../app/store';
import ReserveForm from '../pages/ReserveForm'
it('should render Reservation page', () => {
  const reserveForm = render(
    <BrowserRouter>
      <Provider store={store}>
        <ReserveForm />
      </Provider>
    </BrowserRouter>,
  );
  expect(reserveForm).toMatchSnapshot();
});
