import React from "react"

import "./cart-checkout.styles.scss"

import CustomButton from "../custom-button/custom-button.component"

const CartCheckout = ( ) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButton>Go to checkout </CustomButton>
        </div>
    )
}

export default CartCheckout