import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

const CreateClaim = ({onCreate}) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [amount, setAmount] = useState('');
  const [expensedate, setExpenseDate] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstname){
      alert("Please Enter First Name")
    }
    if (!lastname){
      alert("Please Enter Last Name")
    }
    if (!amount){
      alert("Please Enter Amount")
    }
    if (!expensedate){
      alert("Please Enter Expense Date")
    }
    if (!purpose){
      alert("Please Enter Purpose")
    }

    onCreate({ firstname, lastname, amount, expensedate, purpose })

    setFirstname('')
    setLastname('')
    setAmount('')
    setExpenseDate('')
    setPurpose('')
    
    // const answer = window.confirm("are you sure?");
    // if (answer) {
    //   // Save it!
    //   console.log("Thing was saved to the database.");
    // } else {
    //   // Do nothing!
    //   console.log("Thing was not saved to the database.");
    // }
  };
  
  return (
    <Container>
      <h1>Create Claim</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId='formFirstName'>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProjectid">
          <Form.Label>Project ID</Form.Label>
          <Form.Select>
            <option>select</option>
          </Form.Select>
        </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formAmount">
          <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formAmount">
          <Form.Label>Currency</Form.Label>
            <Form.Select>
              <option>select</option>
            </Form.Select>
        </Form.Group>
      </Row>

        <Form.Group className="mb-3" controlId="formExpenseDate">
          <Form.Label>Expense Date</Form.Label>
          <Form.Control type="date" value={expensedate} onChange={(e) => setExpenseDate(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPurpose">
          <Form.Label>Purpose</Form.Label>
          <Form.Control type="text" placeholder='Enter Purpose' value={purpose} onChange={(e) => setPurpose(e.target.value)}/>
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
  )
}
export default CreateClaim