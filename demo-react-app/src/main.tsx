import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@design-system-lib';
import 'angular-design-lib';
import { App } from './app/app';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
