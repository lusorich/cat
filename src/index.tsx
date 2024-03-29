import { StrictMode } from 'react';

import { App } from 'app/App';
import { store } from 'app/store/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import 'assets/scss/fonts.scss';
import 'assets/scss/global.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
