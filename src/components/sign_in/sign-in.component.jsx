import React from 'react';
import FormInput from '../form-input/form-input.component';

import { Button } from "react-bootstrap";
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super();
        this.state ={
            email:'',
            password:''
        }
    }
   

   handleChange = event =>{
        const { name, value } = event.target;
        this.setState({[name]: value })

   };

    render(){
        return(
            <div className = 'sign-in'>
                <h2> I already have an account </h2>
                <span>Log in with your eamil and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput
                     name="email"
                    type="email" 
                    handleChange={this.handleChange}
                    label="Email"
                    value={this.state.email} required/>
                
                    <FormInput
                     name="password"
                    type="password"
                    label="Password"
                    handleChange={this.handleChange}
                    value={this.state.password} required/>
                    <div className='buttons'>  
                        <Button className="btn" type="submit" > Log In </Button>
                        
                    </div>
                </form>
            
            </div>
        )
    }
}

export default SignIn;