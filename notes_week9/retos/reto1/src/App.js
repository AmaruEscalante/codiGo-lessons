import logo from './logo.svg';
import { Header, Sidenav, Main, Footer } from './components';
import './App.css';

function App() {
  return (
      <div className="App">
        <Header/>
        <div className="row">
            <Sidenav/>
            <Main/>
            <Sidenav/>
        </div>
        <Footer/>
      </div>
  );
}
export default App;