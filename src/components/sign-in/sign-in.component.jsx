import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithFacebook } from "../../firebase/firebase.util";
import {
  googleSigninStart,
  emailSigninStart
} from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { emailSigninStart } = this.props;
    const { email, password } = this.state;
    emailSigninStart(email, password);
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSigninStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            label="email"
            value={this.state.email}
            required
          />

          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            label="password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              isGoogleSignIn
              onClick={googleSigninStart}
            >
              Sign in with Google
            </CustomButton>
            <CustomButton
              type="button"
              isGoogleSignIn
              onClick={signInWithFacebook}
            >
              Sign in with Facebook
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
