import React from "react";
import { Card } from "antd";
import axios from "axios";
import CustomForm from "../components/Form";

class UserDetail extends React.Component {
  state = {
    users: {}
  };
  componentDidMount() {
    const userID = this.props.match.params.userID;
    axios.get(`http://localhost:8000/api/posts/${postID}`).then(res => {
      this.setState({
        posts: res.data
      });
      console.log(res.data);
    });
  }
  handleUserDelete = event => {
    const userID = this.props.match.params.userID;
    axios.delete(`http://localhost:8000/api/users/${userID}`);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Card username={this.state.users.username}></Card>
        <CustomForm
          btnText="Update"
          requestType="put"
          userID={this.props.match.params.userID}
        ></CustomForm>
        <form onSubmit={this.handleUserDelete}>
          <button type="danger" htmltype="submit">
            Delete
          </button>
        </form>
      </div>
    );
  }
}
export default UserDetail;
