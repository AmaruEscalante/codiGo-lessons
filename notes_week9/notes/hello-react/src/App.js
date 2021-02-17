import logo from './logo.svg';
import {Header, Card, Footer, Main} from "./components"
// import Header from './components/Header/Header'
import React, { useState, useEffect } from 'react';

import './App.css';


// class Counter extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   handleSum = () => {
//     console.log("HandleSum", this);
//     this.setState({
//       count: this.state.count + 1,
//     });
//   } 

//   handleRes = () => {
//     console.log("HandleRes", this);
//     this.setState({
//       count: this.state.count - 1,
//     });
//   }
  
//   render(){
//     const { count } = this.state;
//     return(
//       <div>
//         {count}
//         <div>
//           <button onClick={this.handleSum}>Sumar</button>
//           <button onClick={this.handleRes}>Restar</button>
//         </div>
//       </div>
//     );
//   }
// }

function Example(){
  const [count, setCount] = useState(0);

  useEffect(()=> {
    document.title = `You clicked ${count} times`;
  });

  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>
        Click me
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        {/* <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter> */}
        <Example></Example>
        <Card name="Amaru" lastname="Escalante" title="Electrical Engineer" description="Best DoTO"/>
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
