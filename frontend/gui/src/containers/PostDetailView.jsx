import React from "react";
import { Card } from "antd";
import axios from "axios";

class PostDetail extends React.Component {
  state = {
    posts: {}
  };
  componentDidMount() {
    const postID = this.props.match.params.postID;
    axios.get(`http://localhost:8000/api/${postID}`).then(res => {
      this.setState({
        posts: res.data
      });
      console.log(res.data);
    });
  }
  render() {
    return <Card title={this.state.posts.title}></Card>;
  }
}
export default PostDetail;
