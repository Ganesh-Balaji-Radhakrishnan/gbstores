import React, {Component} from "react"

import Forminput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import {auth, signInWithGoogle} from "../../firebase/firebase.utils"

import "./signin.styles.scss"

class Signin extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState ({
                email : "",
                password:""
            })
        } catch(error){
            console.error(error)
        }
    }

    handleChange = event => {
        event.preventDefault()
        const {value, name} = event.target
        console.log(value, name)
        this.setState({
            [name] : value
        })
    }

    render(){
        return(
            <div className="sign-in">
                <h1>Do you already have an account?</h1>
                <span>Sign in here</span>

                <form onSubmit={this.handleSubmit}>
                    <Forminput 
                        name="email" 
                        onChange={this.handleChange} 
                        value={this.state.email} 
                        type="email" 
                        label="email"

                        required
                    />

                    <Forminput 
                    name="password" 
                    onChange={this.handleChange} 
                    value={this.state.password} 
                    type="password" 
                    label="Password"

                    required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                          Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin