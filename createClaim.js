import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
            <option>select</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="text" placeholder='Enter Amount' />
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
