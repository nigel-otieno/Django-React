import React from "react";
import Posts from "../components/Posts";
import axios from "axios";
import CustomForm from '../components/Form';

class PostList extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("http://localhost:8000/api/")
      .then(res => {
        this.setState({
          posts: res.data
        })
        console.log(res.data)
      })
  }
  render() {
    return (
      <div>
        <Posts data={this.state.posts} />
        <h2>Create a Post</h2>
        <CustomForm />
      </div>
    )
  }
}
export default PostList;
