import React from "react";
import axios from "axios";
import CustomForm from "../components/Form";

class UserList extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios.get("http://localhost:8000/api/users/").then(res => {
      console.log(res.data);
      this.setState({
        posts: res.data
      });
      console.log(res.data);
    });
  }
  render() {
    return (
      <div>
        <Posts data={this.state.users} />
        <h2>Create a Profile</h2>
        <CustomForm requestType="post" btnText="Create" articleID={null} />
      </div>
    );
  }
}
export default UserList;
