import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Notes from './react-notes/Notes';

if (module.hot) {
  module.hot.accept();
}  

ReactDOM.render(
  <Notes />,
  document.getElementById('react-notes-app')
);