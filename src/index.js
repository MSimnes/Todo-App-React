import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TimeAgo from 'react-timeago'


import App from './App';
import LastSeen from './LastSeen';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    {/* <LastSeen /> */}
  </StrictMode>
);
