import React, { Component } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

/* this logic correctly redirects the page to the proper page upon resolution of async 
 response from the POST request in this.props.signup via setState in the main App.jsx */

const Signup = props => {
  const { signup } = props;
  return (
    <div className="Signup">
      <Form className="Form" onSubmit={signup}>
        <FormGroup>
          <Label for="email" hidden>
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            bsSize="large"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password" hidden>
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            bsSize="large"
          />
        </FormGroup>
        <Button value="Submit" bssize="lg" outline color="secondary">
          Get Started{" "}
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
