import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function Login({setToken, navigate}) {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)

  function validateForm() {
    return employeeId.length > 0 && password.length > 0;
  }

  async function loginUser(user) {
    return fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      } else {
        setError(false);
        return res.json()
      }
    })
    .catch(error => {
      setError(true);
      console.error('There was a problem with the fetch operation:', error);
    });
   }
      
   async function handleSubmit (event) {
    event.preventDefault();
    const user = {
      "EmployeeID": employeeId,
      "Password": password
    };
    console.log(user)
    const token = await loginUser(user)
    if (!error) {
      console.log(token["access_token"])
      setToken(token["access_token"]);
      navigate('/claims');
    }
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
          { error ? 
          <div className="py-4 text-red-500">
            There is an error with your user name or password
          </div> : ""
          }
        </Form>
      </div>
    </div>
  );
}