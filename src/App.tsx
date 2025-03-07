import { Content } from 'components';
import React, { type FC, type ReactElement } from 'react';

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
