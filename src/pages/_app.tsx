import '../styles/globals.css';

import { Provider } from 'jotai'
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <Provider>
        <Component {...pageProps} />
      </Provider>
  );
}

export default App;
