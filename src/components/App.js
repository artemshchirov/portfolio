import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ScrollButton from './ScrollButton';

const App = () => {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main />
        <Footer />
        <ScrollButton />
      </div>
    </div>
  );
};

export default App;
