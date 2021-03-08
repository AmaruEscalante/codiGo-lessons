import { useState, useEffect } from 'react';
import './Form.css'

function Form (){
    
    const [formState, setFormState] = useState({
        form : {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            address: '',
            address2: '',
            country: '',
            state: '',
            zip: ''
        },
        save_for_later: 'false',
    })
    
    const handleChange = e => {
        const { name, value } = e.target;
        setFormState( prevState => ({
            ...prevState,
            form: {
                ...prevState.form,
                [name]: value
            },
            save_for_later: false
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        setFormState( prevState => ({
            ...prevState,
            save_for_later: true
        }))
    }
    
    useEffect(() => {
        let form = localStorage.getItem('form');
        if(form) {
            setFormState(
                {form: JSON.parse(form)}
            )
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(formState.form));
    }, [formState.save_for_later]);
    
    return (
        <form onSubmit={handleSubmit} className="custom-form row g-3 p-3">
            <h1>Billing Address</h1>
        <div className="col-md-6">
            <label for="inputFirstName" className="form-label">First name</label>
            <input onChange={handleChange} value={formState.form.firstName} name="firstName" type="text" className="form-control" id="inputFirstName"></input>
        </div>
        <div className="col-md-6">
            <label for="inputLastName" className="form-label">Last name</label>
            <input onChange={handleChange} name="lastName" value={formState.form.lastName} type="text" className="form-control" id="inputLastName"></input>
        </div>
        <div className="col-12">
            <label for="inputUsername" className="form-label">Username</label>
            <input onChange={handleChange} name="username" value={formState.form.username} type="text" className="form-control" id="inputUsername" placeholder="Username"></input>
        </div>
        <div className="col-12">
            <label for="inputEmail" className="form-label">Email <span style={{color: "gray"}}>(Optional)</span> </label>
            <input onChange={handleChange} name="email" value={formState.form.email} type="email" className="form-control" id="inputEmail" placeholder="you@example.com"></input>
        </div>

        <div className="col-12">
            <label for="inputAddress1" className="form-label">Address</label>
            <input onChange={handleChange} name="address" value={formState.form.address} type="text" className="form-control" id="inputAddress1" placeholder="1234 Main St"></input>
        </div>

        <div className="col-12">
            <label for="inputAddress2" className="form-label">Address 2 <span style={{color: "gray"}}>(Optional)</span></label>
            <input onChange={handleChange} name="address2" value={formState.form.address2} type="text" className="form-control" id="inputAddress2" placeholder="1234 Main St"></input>
        </div>

        <div className="col-md-6">
            <label for="inputCountry" className="form-label">Country</label>
            <select onChange={handleChange} name="country" value={formState.form.country} id="inputCountry" className="form-select">
            <option selected>Choose...</option>
            <option value="Country 1">Country 1</option>
            <option value="Country 2">Country 2</option>
            <option value="Country 3">Country 3</option>
            </select>
        </div>

        <div className="col-md-4">
            <label for="inputState" className="form-label">State</label>
            <select onChange={handleChange} name="state" value={formState.form.state} id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option value="State 1">State 1</option>
            <option value="State 2">State 2</option>
            <option value="State 3">State 3</option>
            </select>
        </div>
        <div className="col-md-2">
            <label for="inputZip" className="form-label">Zip</label>
            <input onChange={handleChange} name="zip" value={formState.form.zip} type="text" className="form-control" id="inputZip"></input>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary btn-lg">Save for Later</button>
        </div>
        </form>        
    )
}

export { Form }