import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Header(){
  return <header className="header">Header</header>;
}

function Main(props){
  // console.log('props', props);
  const {
    children
  } = props;
  return <main className="main">{children}</main>;
}

function Card(props){
  const{
    name,
    lastname,
    title,
    description,
  } = props;

  return (
    <article>
      <ul>
        <li>Full Name: {name} {lastname}</li>
        <li>Titulo: {title}</li>
        <li>Descripcion: {description}</li>
      </ul>
    </article>
  )
}

function Footer(){
  return <footer className="footer">footer</footer>;
}

// My app

function App(){
  return (
    <div>
      <Header/>
      <Main>
        <Card name="Amaru" lastname="Escalante" title="Electrical Engineer" description="Best DoTO"/>
      </Main>
      <Footer/>
    </div>
  )
}

ReactDOM.render(
  <div>
    {App()}
  </div>
  , document.getElementById('root'));

// ReactDOM.render(<h1>Hola Mundo</h1>, document.getElementById("root"))