import React from "react";
// import { Form, Input, Button } from "antd";
import axios from 'axios';
// const FormItem = Form.Item;

class CustomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: ''};
  }
  
  // by using arrow functions since they do not have a 'this' we wont need to bind it in the constructor
  handleChange = (event) => {
    this.setState({...this.state.title, title: event.target.value})
  }
  
  handleFormSubmit = (event, requestType, postID) => {
    // event.preventDefault();
    const title = event.target.elements.title.value;
    console.log(this.state.title);
    switch ( requestType) {
      case 'post':
        return axios.post('http://localhost:8000/api/', {
          title: title
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
      case 'put':
        return axios.put(`http://localhost:8000/api/${postID}/`, {
          title: title
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.postID)}>
            <input name="title" placeholder="input title" onChange={this.handleChange}/>
            <button onSubmit={this.handleFormSubmit} type="primary" htmlType="submit">{this.props.btnText}</button>
        </form>
      </div>
    );
  }
}

export default CustomForm;

