import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Table from 'react-bootstrap/Table'

function ExcerciseTwo() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    gender: "",
    bio: "",
    policy: "",
    email: "",
    status: "",
    password: "",
  });
  const [submit, isSubmit] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    isSubmit(true)
  }
  return (
    <>
      <div className="container" style={{ marginTop: "4em" }}>
        {submit ?  <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Bio</th>
          <th> Email</th>
          <th>Pasword</th>
          <th>Status</th>
          <th>Policy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{userInfo.name}</td>
          <td>{userInfo.gender}</td>
          <td>{userInfo.bio}</td>
          <td>{userInfo.email}</td>
          <td>{userInfo.password}</td>
          <td>{userInfo.status}</td>
          <td>{userInfo.policy}</td>
        </tr>
      </tbody>
    </Table> : <Card>
          <Card.Header as="h5">Register Form</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit} onChange={handleChange}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="Enter your name"
                  name="name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ marginRight: "2em" }}>Gender</Form.Label>
                <Form.Check
                  inline
                  label="Male"
                  name="gender"
                  type="radio"
                  value="male"
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  type="radio"
                  value="female"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Bio</Form.Label>
                <Form.Control as="textarea" rows={3} name="bio" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm password" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select name="status" aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="received">Received</option>
                  <option value="processing">Processing</option>
                  <option value="completed">Completed</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  name="policy"
                  type="checkbox"
                  label="I agree with all terms and conditions"
                  value="I agree with all terms and conditions"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>}
        
       
      </div>
    </>
  );
}

export default ExcerciseTwo;
