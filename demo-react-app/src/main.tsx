import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@design-system-lib';
import { App } from './app/app';
import 'ng-design';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
