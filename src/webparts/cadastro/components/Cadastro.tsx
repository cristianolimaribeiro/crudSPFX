
import * as React from 'react';
import { GlobalStyle } from '../common/style/global';
import { Home } from '../pages/Home';
import { RecordsProvider } from '../hooks/useRecords';
import { ModalProvider } from '../hooks/useModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cadastro() {
  return (
    <>
      <RecordsProvider>
        <ModalProvider>
          <Home />
          <ToastContainer />
        </ModalProvider>
      </RecordsProvider>
      <GlobalStyle />
    </>
  );
}

export default Cadastro
