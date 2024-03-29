import React from 'react';
import * as ReactDOM from 'react-dom/client';

const element = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

console.log(React.createElement(
  'h1',
  null,
  'Hello, React!'
));

const $container = document.querySelector('#root');

const root = ReactDOM.createRoot($container);

root.render(element);
