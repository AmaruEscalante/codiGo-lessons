import logo from './logo.svg';
import {Header, Card, Footer, Main, Form} from "./components"
// import Header from './components/Header/Header'
import React, { useState, useEffect, Component } from 'react';

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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      form: {
        id: '',
        name: '',
        lastname: '',
        title: '',
        description: '',
      },
      editUser: null,
    };
  };

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then( users => this.setState({ users }));
  }

  handleClickDelete = (props) => {
    // console.log("props", props);
    fetch(`http://localhost:3000/users/${props.id}`, {
      method: "DELETE",
    })
    .then( (response) => response.json())
    .then( (user) => {
      this.setState({
        users: this.state.users.filter(user => user.id !== props.id )
      });
    })
  }

  handleClickEdit = (props) =>{
      console.log("las props", props);
      this.setState({
        editUser: props
      })
  }

  handleChange = (e) => {
    this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value,
            }
    })
}

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.form),
    })
    .then(response => {
      return response.json()
    })
    .then(user => {
      console.log("user", user)
      this.onAddUser(user)})
  }

  getUser = () => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((users) => this.setState({users}))
  }

  onAddUser = (user) => {
    console.log("user", user);
    this.setState({
      users: this.state.users.concat(user),
    })
  }

  editUser = (user) => {
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((user) => {
        this.setState({
          editUser: null,
        });
        this.getUser();
      })
  }

  render(){
    const { editUser } = this.state;

    return <div className="App">
          <Header/>
          <Main>
            <h1 className="header">Header</h1>
            {this.state.editUser ? 
            <Form 
              userEdit={editUser}
              onSubmit={this.editUser}
              onChange={this.handleChange}
              textButton="Editar"
              form={this.state.form}
              />
              :
            <Form onSubmit={this.handleSubmit} 
                  onChange={this.handleChange}
                  form={this.state.form}
                  textButton="Crear"
            />
            }
            { this.state.users.length ? 
              this.state.users.map((user, id)=>(
              <Card 
                key={user.id} 
                id={user.id}
                name={user.name} 
                lastname={user.lastname} 
                title={user.title}
                description={user.description}
                onClickDelete={this.handleClickDelete}
                onClickEdit={this.handleClickEdit}
                />
              ))
              : <h1>No hay usuarios</h1>
            }
            
          </Main>
            <h1 className="Footer">Footer</h1>
          <Footer/>
        </div>
  }
}

export default App;
