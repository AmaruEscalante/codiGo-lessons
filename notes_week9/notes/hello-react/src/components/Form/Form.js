import { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                name:"",
                lastname: "",
                title: "",
                description: ""
            }
        }
    }

    componentDidUpdate(nextProps){
        console.log("next Props", nextProps.userEdit);
        if (typeof(nextProps.userEdit) !== 'undefined'){
            console.log("next props continua")
            this.setState( 
                {form: nextProps.userEdit}
            );
        }
    }

    render(){
        return <div>
            <h1>Nuevo Usuario</h1>
            <form onSubmit={this.props.onSubmit} action="">
                <label htmlFor="">First Name</label>
                <input 
                    onChange={this.props.onChange} 
                    type="text" 
                    value={this.props.form.name}
                    name="name"/>
                <br/>
                <label htmlFor="">Last Name</label>
                <input 
                    onChange={this.props.onChange} 
                    type="text" 
                    value={this.props.form.lastname}
                    name="lastname"/>
                <br/>
                <label htmlFor="">Title</label>
                <input 
                    onChange={this.props.onChange} 
                    type="text" 
                    value={this.props.form.title}
                    name="title"/>
                <br/>
                <label htmlFor="">Description</label>
                <input 
                    onChange={this.props.onChange} 
                    type="text" 
                    value={this.props.form.description}
                    name="description"/>
                <br/>
                <button> {this.props.textButton}</button>
            </form>
        </div>
    }
}

export { Form };