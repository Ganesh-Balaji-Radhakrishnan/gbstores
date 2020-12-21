import React, {Component} from "react"

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
            <div>
                <h1>Do you already have an account?</h1>
                <span>Sign in here</span>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="email" 
                        onChange={this.handleChange} 
                        value={this.state.email} 
                        type="email" 
                        
                        required
                    />

                    <label>Email</label>

                    <input 
                    name="password" 
                    onChange={this.handleChange} 
                    value={this.state.password} 
                    type="password" 
                    
                    required 
                    />

                    <label>Password</label>

                    <input type="submit" value="submit form"/>
                </form>

            </div>
        )
    }
}

export default Signin