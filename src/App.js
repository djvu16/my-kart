import React, { Component } from "react";
import './App.css';
import { Route, Switch } from 'react-router-dom';
import {connect} from "react-redux";
//components
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-register/sign-in-and-register.component";
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
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
