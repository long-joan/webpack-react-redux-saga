import React from 'react'
// eslint-disable-next-line semi
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { app } from './app';
// import 'antd-mobile/dist/antd-mobile.css';
import '../src/css/app.less';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(app)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(app)
  })
}
