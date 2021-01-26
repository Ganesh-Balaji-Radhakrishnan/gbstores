import React from "react"
import {Link} from "react-router-dom"

import CartIcon from "../cart-icon/cart-icon.component"
import CartCheckout from "../cart-checkout/cart-checkout.component"

import {connect} from "react-redux"

import { auth } from '../../firebase/firebase.utils';


// https://create-react-app.dev/docs/adding-images-fonts-and-files/
import {ReactComponent as Logo} from "../../assets/crown.svg"

import "./header.styles.scss"

const Header = ({currentUser,hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo  className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop"> Shop </Link>
            <Link className="option" to="/shop"> Contact </Link>
            {/* <Link className="option" to="/signin">Signin</Link> */}
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                     SIGN OUT
                 </div>
                ) : (
                <Link className='option' to='/signin'>
                      SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
        {
            hidden ? null : <CartCheckout />
        }
        
    </div>
)

//connect to the redux store to retrive state
const mapStatetoProps = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStatetoProps)(Header)