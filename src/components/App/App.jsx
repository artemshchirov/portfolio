import { useState } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ScrollButton from '../ui/ScrollButton/ScrollButton';
import Alert from '../ui/Alert/Alert';

import './App.scss';

function App() {
  const [messageAlert, setMessageAlert] = useState(null);
  const [isActiveAlert, setIsActiveAlert] = useState(false);

  const showAlert = (message) => {
    setMessageAlert(message);
    setIsActiveAlert(true);
    setTimeout(() => {
      setIsActiveAlert(false);
    }, 3000);
  };

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main showAlert={showAlert} />
        <Footer />
        <ScrollButton />
        <Alert messageAlert={messageAlert} isActiveAlert={isActiveAlert} />
      </div>
    </div>
  );
}

export default App;
