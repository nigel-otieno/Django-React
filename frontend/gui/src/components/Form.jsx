import React from "react";
import axios from 'axios';

//Better naming conventions. Try to be specific about component names
class CustomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: ''};
  }
  
  // by using arrow functions since they do not have a 'this' we wont need to bind it in the constructor
  handleChange = (event) => {
    this.setState({...this.state.title, title: event.target.value})
    this.setState({...this.state.description, description: event.target.value})

  }
  
  handleFormSubmit = (event, requestType, postID) => {
    // event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;

    console.log(this.state.title);
    switch ( requestType) {
      case 'post':
        return axios.post('http://localhost:8000/api/', {
          title: title,
          description: description,
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
      case 'put':
        return axios.put(`http://localhost:8000/api/${postID}/`, {
          title: title,
          description: description,
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
        <form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.postID)}>
            <input name="title" placeholder="input title" onChange={this.handleChange}/>
            <input name="description" placeholder="input description" onChange={this.handleChange}/>
            <button onSubmit={this.handleFormSubmit} type="primary" htmlType="submit">{this.props.btnText}</button>
        </form>
      </div>
    );
  }
}

export default CustomForm;

