import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Routes from './config/Routes';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>

      <Route render={props => (
        <>
          <Header {...props} />
          <Routes />
          <Footer />
        </>
      )} />
    </BrowserRouter>
  );
}

export default App;
