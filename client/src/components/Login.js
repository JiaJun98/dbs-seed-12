import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function Login({setToken, navigate}) {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return employeeId.length > 0 && password.length > 0;
  }

  async function loginUser(user) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(data => data.json())
   }
      
   async function handleSubmit (event) {
    event.preventDefault();
    const user = {
      "employeeId": employeeId,
      "password": password
    };
    // const token = await loginUser(user)
    const token ="test123"
    setToken(token);
    navigate('/create');
  }
  return (
    <div className="flex h-screen bg-sky-100">
      <div className="m-auto rounded-lg py-16 px-24 bg-white drop-shadow-lg">
        <h1 className="font-mono text-2xl mb-12 font-semibold text-sky-700">Employee Claim App</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="employeeId" className="mb-2">
            <Form.Label className="text-base text-slate-800">Employee Id</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label className="text-base text-slate-800">Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="mt-4 text-base" variant="primary" size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}