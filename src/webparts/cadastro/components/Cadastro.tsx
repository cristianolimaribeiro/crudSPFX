
import * as React from 'react';
import { GlobalStyle } from '../common/style/global';
import { Home } from '../pages/Home';
import { RecordsProvider } from '../hooks/useRecords';
import { ModalProvider } from '../hooks/useModal';


function Cadastro() {
  return (
    <>
      <RecordsProvider>
        <ModalProvider>
          <Home />
        </ModalProvider>
      </RecordsProvider>
      <GlobalStyle />
    </>
  );
}

export default Cadastro
