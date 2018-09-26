import React from "react";

import api from "../api";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      originalPassword: "",
    };
  }

  updateName(event) {
    const { value } = event.target;
    this.setState({ fullName: value });
  }

  updateEmail(event) {
    const { value } = event.target;
    this.setState({ email: value });
  }

  updatePass(event) {
    const { value } = event.target;
    this.setState({ originalPassword: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    api.post("/signup", this.state)
      .then(response => {
        console.log("Sign UP 🤠", response.data);
        const { onSignUp } = this.props;
        onSignUp(response.data.userDoc);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! There was a problem. 💩");
      });
  }

  render() {
    const { currentUser } = this.props;
    const { fullName, email, originalPassword } = this.state;

    if (currentUser) {
      return (
        <section>
          <h2>You are signed up!</h2>
          <p>
            Welcome, {currentUser.fullName}.
            Your user ID is <b>{currentUser._id}</b>.
          </p>
        </section>
      );
    }

    return (
      <section>
        <h2>Sign Up</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Full Name:
            <input value={fullName} type="text" placeholder="Rey"
                onChange={event => this.updateName(event)} />
          </label>

          <label>
            Email:
            <input value={email} type="email" placeholder="rey@jedi.com"
                onChange={event => this.updateEmail(event)} />
          </label>

          <label>
            Password:
            <input value={originalPassword} type="password"
                placeholder="It's a secret"
                onChange={event => this.updatePass(event)} />
          </label>

          <button>Sign Up</button>
        </form>
      </section>
    );
  }
}

export default SignUp;
