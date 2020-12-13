import React from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

class CustomForm extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    console.log(title);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}>
          <FormItem label="Title">
            <Input name="title" placeholder="input title" />
          </FormItem>
          {/* <Form.Item label="Content">
          <Input placeholder="input content" />
        </Form.Item> */}
          <FormItem>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
