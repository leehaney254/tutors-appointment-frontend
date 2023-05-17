import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../app/store';
import Reservation from '../pages/Reservation'
it('should render Reservation page', () => {
  const reservation = render(
    <BrowserRouter>
      <Provider store={store}>
        <Reservation />
      </Provider>
    </BrowserRouter>,
  );
  expect(reservation).toMatchSnapshot();
});
