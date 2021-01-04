import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from "./components/header/header.component"
import SigninandSignUp from "./pages/sign-inandsign-up/sign-inandsign-up.jsx"
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"

import './App.css'


class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth=>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }
      else {
        this.setState({ currentUser: userAuth });

      }
    });
    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth() //this when called closes the firebase subscription
  }
  

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/> 
        {/* //makes sure the header stays on top of all the pages */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninandSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App
