import React from "react";
import axios from "axios";

class CustomUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
  }

  // by using arrow functions since they do not have a 'this' we wont need to bind it in the constructor
  handleUserChange = event => {
    this.setState({ ...this.state.username, username: event.target.value });
    this.setState({ ...this.state.email, email: event.target.value });
    this.setState({ ...this.state.password, password: event.target.value });
  };

  handleUserFormSubmit = (event, requestType, userID) => {
    // event.preventDefault();
    const username = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    console.log(this.state.username);
    switch (requestType) {
      case "post":
        return axios
          .post("http://localhost:8000/api/users/", {
            username: username,
            email: email,
            password: password
          })
          .then(res => console.log(res))
          .catch(error => console.log(error));
      case "put":
        return axios
          .put(`http://localhost:8000/api/users/${userID}/`, {
            username: username,
            email: email,
            password: password
          })
          .then(res => console.log(res))
          .catch(error => console.log(error));
      default:
        return null;
    }
  };
  render() {
    return (
      <div>
        <form
          onSubmit={event =>
            this.handleUserFormSubmit(
              event,
              this.props.requestType,
              this.props.userID
            )
          }
        >
          <input
            name="username"
            placeholder="input username"
            onChange={this.handleUserChange}
          />
          <input
            name="email"
            placeholder="input description"
            onChange={this.handleUserChange}
          />
          <input
            name="password"
            placeholder="input password"
            onChange={this.handleUserChange}
          />
          <button
            onSubmit={this.handleUserFormSubmit}
            type="primary"
            htmlType="submit"
          >
            {this.props.btnText}
          </button>
        </form>
      </div>
    );
  }
}

export default CustomUserForm;
