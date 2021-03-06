import React, { Component } from "react";
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from "react-redux";
//components
import Header from "./components/header/header.component";

//pages
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-register/sign-in-and-register.component";
import CheckoutPage from './pages/checkout/checkout.component';

import { auth,createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from './redux/user/user.actions';


class App extends Component {

  unsubscribeFromAuth=null;

  componentDidMount(){

    const {setCurrentUser} =this.props;

    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef =await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            });
            
        });
        
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

    render(){
      return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={()=>(this.props.currentUser ? (<Redirect to='/'/>):(<SignInAndSignUpPage />))}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
});

const mapStateToProps=({ user })=>({
  currentUser:user.currentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
