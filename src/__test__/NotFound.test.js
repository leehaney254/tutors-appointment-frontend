import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../app/store';
import NotFound from '../pages/NotFound';

it('should render AddTutor page', () => {
  const notFound = render(
    <BrowserRouter>
      <Provider store={store}>
        <NotFound />
      </Provider>
    </BrowserRouter>,
  );
  expect(notFound).toMatchSnapshot();
});
