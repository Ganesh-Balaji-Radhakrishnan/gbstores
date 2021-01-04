import React, {Component} from "react"

import Forminput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import "./sign-up.styles.scss"

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils"

class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            displayName : '',
            password : '',
            confirmPassword : '',
            email : ''
        }
    }
        
        handleSubmit = async event => {
            event.preventDefault();
        
            const { displayName, email, password, confirmPassword } = this.state;
        
            if (password !== confirmPassword) {
              alert("passwords don't match");
              return;
            }
        
            try {
              const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
              );
        
              await createUserProfileDocument(user, { displayName });
        
              this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
              });
            } catch (error) {
              console.error(error);
            }
          };
        
          handleChange = event => {
            const { name, value } = event.target;
        
            this.setState({ [name]: value });
          };
        

    render(){
        const {displayName, password, confirmPassword, email} = this.state

        return(
            <div className="signup">
                <h2 className="title">I don't have an account</h2>
                <span>signup with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <Forminput
                        type="name"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="your name"
                        required
                    />
                    <Forminput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="your email"
                        required
                    />
                    <Forminput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="your password"
                        required
                    />
                    <Forminput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="confirm password"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp