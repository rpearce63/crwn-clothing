import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
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
        </form>
      </div>
    );
  }
}

export default SignIn;
