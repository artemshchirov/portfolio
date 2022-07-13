import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
