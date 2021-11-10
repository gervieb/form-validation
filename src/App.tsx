import React, { FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loader from 'components/Loader/Loader.component'
import AppRoutes from 'routes';

import { GlobalStyle } from 'GlobalStyle.style';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
