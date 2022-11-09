import { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ScrollButton from './ScrollButton';
import Alert from './Alert/Alert';

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
