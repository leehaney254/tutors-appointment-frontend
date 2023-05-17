import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../app/store';
import Tutor from '../pages/Tutor';

it('should render Tutor page', () => {
  const tutor = render(
    <BrowserRouter>
      <Provider store={store}>
        <Tutor />
      </Provider>
    </BrowserRouter>,
  );
  expect(tutor).toMatchSnapshot();
});
