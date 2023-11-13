import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

class NewStudentForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    email: "",
    age: "",
    phone: ""
  };

  componentDidMount() {
    if (this.props.student) {
      const { pk, name, age, email, phone } = this.props.student;
      this.setState({ pk, name, age, email, phone });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createStudent = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/students/add/", this.state)
      .then(() => {
        this.props.resetState();
        this.props.toggle();
      });
  };

  editStudent = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:8000/api/v1/students/update/${this.state.pk}/`,
        this.state
      )
      .then(() => {
        this.props.resetState();
        this.props.toggle();
      });
  };
  

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age:</Label>
          <Input
            type="text"
            name="age"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.age)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone:</Label>
          <Input
            type="text"
            name="phone"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone)}
          />
        </FormGroup>
        <Button>Save</Button>
      </Form>
    );
  }
}

export default NewStudentForm;