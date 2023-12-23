import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Greeting from './Greeting';

const App = createBrowserRouter([
  {
    path: '/',
    element: <Greeting />,
  },
]);

export default App;
