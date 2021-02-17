import logo from './logo.svg';
import {Header, Card, Footer, Main} from "./components"
// import Header from './components/Header/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <Card name="Amaru" lastname="Escalante" title="Electrical Engineer" description="Best DoTO"/>
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
