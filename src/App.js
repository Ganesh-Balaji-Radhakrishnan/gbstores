import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from "./components/header/header.component"
import SigninandSignUp from "./pages/sign-inandsign-up/sign-inandsign-up.jsx"

import './App.css'


function App() {
  return (
    <div>
      <Header /> 
      {/* //makes sure the header stays on top of all the pages */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninandSignUp} />
      </Switch>
    </div>
  )
}

export default App
