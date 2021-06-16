import React, { Component } from "react";


//styles
import "./signin.styles.scss";

//components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth,signInWithGoogle} from "../../firebase/firebase.utils";


class SignIn extends Component{
    constructor(props){
        super(props);


        this.state={
            email:"",
            password:""
        }
    }

    handleChange=(event)=>{
        event.preventDefault();
        const { value,name}=event.target;
        this.setState({[name]:value});
    }
    handleSubmit= async (event)=>{
        event.preventDefault();
        const { email,password } =this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:""});
        } catch (error) {
            console.log(error);
        }

        
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Signin with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        value={this.state.email} 
                        name="email" 
                        id="email" 
                        label="email"
                        handleChange={this.handleChange}
                        required
                    />
                    
                    <FormInput 
                        type="password" 
                        value={this.state.password} 
                        name="password" 
                        id="password"
                        label="password"
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Signin with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;