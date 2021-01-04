import React from "react"

import Signin from "../../components/signin/signin.component"
import SignUp from "../../components/sign-up/sign-up.components"

import "./sign-inandsign-up.scss"

const SigninandSignUp = () => (
    <div className="signinandsignout">
       <Signin />
       <SignUp />
    </div>
)

export default SigninandSignUp