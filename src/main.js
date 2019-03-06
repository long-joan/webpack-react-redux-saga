import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { app } from './app';
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(app);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(app);
  });
}
