import logo from './logo.svg';
import { Header, Sidenav, Main, Footer } from './components';
import './App.css';

function App() {
  return (
      <div className="App">
        <Header/>
        {/*<Sidenav/>*/}
        <Main/>
        <Footer/>
      </div>
  );
}
export default App;