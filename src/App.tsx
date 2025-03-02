import React, { type FC, type ReactElement } from 'react';

import { Content } from './Content';
import { GlobalStyle } from './globalStyles';

const App: FC = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Content />
    </>
  );
};

export default App;
