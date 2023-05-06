import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const createClaim = () => {
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId='formFirstName'>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formProjectid">
        <Form.Label>Project ID</Form.Label>
        <Form.Select>
          <option>select</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    </div>
  )
}

export default createClaim
