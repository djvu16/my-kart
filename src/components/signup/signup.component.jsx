import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import {auth,createUserProfileDocument} from "../../firebase/firebase.utils";

import "./signup.styles.scss";

class SignUp extends Component{
    constructor(){
        super();

        this.state ={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit= async event=>{
        event.preventDefault();

        const {displayName,email,password,confirmPassword}=this.state;
        if(password!==confirmPassword){
            alert('passwords dont match');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user,{displayName});

            this.setState={
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            }

        } catch (error) {
            console.error(error);
        }
    }

    handleChange= event=>{
        const { name, value } = event.target;

        this.setState({[name]:value});
    }

    render(){

        const {displayName,email,password,confirmPassword}=this.state;

        return(
            <div className='sign-up'>
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text" 
                        value={displayName} 
                        name="displayName" 
                        id="displayName" 
                        label="Your Name"
                        handleChange={this.handleChange}
                        required
                    />
                   
                    <FormInput 
                        type="email" 
                        value={email} 
                        name="email" 
                        id="email" 
                        label="Email"
                        handleChange={this.handleChange}
                        required
                    />
                    
                    <FormInput 
                        type="password" 
                        value={password} 
                        name="password" 
                        id="password" 
                        label="Password"
                        handleChange={this.handleChange}
                        required
                    />
                    
                    <FormInput 
                        type="password" 
                        value={confirmPassword} 
                        name="confirmPassword" 
                        id="confirmPassword" 
                        label="Confirm Password"
                        handleChange={this.handleChange}
                        required
                    />
                    
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;