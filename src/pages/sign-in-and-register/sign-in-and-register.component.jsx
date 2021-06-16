import React from "react";

//components import
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
//styles import
import "./sign-in-and-register.styles.scss";

const SignInAndSignUpPage =()=>(
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;