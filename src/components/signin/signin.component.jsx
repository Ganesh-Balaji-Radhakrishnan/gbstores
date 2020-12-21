import React, {Component} from "react"

import Forminput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import "./signin.styles.scss"

class Signin extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState ({
            email : "",
            password:""
        })
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
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>

            </div>
        )
    }
}

export default Signin