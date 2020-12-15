import React from "react";
import { Card } from "antd";
import axios from "axios";
import CustomForm from "../components/Form";

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
  handleDelete = (event) => {
    const postID = this.props.match.params.postID;
      axios.delete(`http://localhost:8000/api/${postID}`);
      this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <Card title={this.state.posts.title}></Card>
        <CustomForm
          btnText="Update"
          requestType="put"
          postID={this.props.match.params.postID}
        ></CustomForm>
        <form onSubmit={this.handleDelete}>
          <button type="danger" htmltype='submit'>Delete</button>
        </form>
      </div>
    );
  }
}
export default PostDetail;
