import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect }  from 'react';//added this


export default function CreateClaim() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = window.confirm("are you sure?");
    if (answer) {
      // Save it!
      console.log("Thing was saved to the database.");
    } else {
      // Do nothing!
      console.log("Thing was not saved to the database.");
    }
  };

  //added this
  const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);
      const [users, setUsers] = useState([]);
      useEffect(() => {
          fetch("http://127.0.0.1:80/Dbshackathon/index.php/api/expenses/currencies")
              .then(res => res.json())
              .then(
                  (data) => {
                      setIsLoaded(true);
                      setUsers(data);
                  },
                  (error) => {
                      setIsLoaded(true);
                      setError(error);
                  }
              )
        }, [])


  //added this
  const [error2, setError2] = useState(null);
  const [isLoaded2, setIsLoaded2] = useState(false);
  const [users2, setUsers2] = useState([]);
  useEffect(() => {
      fetch("http://127.0.0.1:80/Dbshackathon/index.php/api/expenses/project")
          .then(res => res.json())
          .then(
              (data) => {
                  setIsLoaded(true);
                  setUsers(data);
              },
              (error) => {
                  setIsLoaded(true);
                  setError(error);
              }
          )
    }, [])
    //-----------------------------------------------------------------------------------

  return (
    <Container>
      <h1>Create Claim</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId='formFirstName'>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProjectid">
          <Form.Label>Project ID</Form.Label>
          <Form.Select>
            <option value="">select</option>
            {users2.map(user2 => (<option value={user2.ProjetID}>{user.ProjectID}</option>))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="text" placeholder='Enter Amount' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProjectid">
          <Form.Label>Currency</Form.Label>
          <Form.Select>
            <option value="">select</option>
            {users.map(user => (<option value={user.CurrencyID}>{user.CurrencyID}</option>))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formExpenseDate">
          <Form.Label>Expense Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPurpose">
          <Form.Label>Purpose</Form.Label>
          <Form.Control type="text" placeholder='Enter Purpose' />
        </Form.Group>
{/* 
        <Form.Group className="mb-3" controlId="formPreviousClaim">
          <Form.Label>Previous Claim ID</Form.Label>
          <Form.Select>
            <option>select</option>
          </Form.Select>
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
  )
}
