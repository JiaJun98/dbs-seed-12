import './App.css';
import React, { useState, useEffect }  from 'react';

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



const App = () => {
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


const [isLoaded2, setIsLoaded2] = useState(false);
const [users2, setUsers2] = useState([]);
useEffect(() => {
    fetch("http://127.0.0.1:80/Dbshackathon/index.php/api/expenses/project")
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded2(true);
                setUsers2(data);
            },
            (error) => {
                setIsLoaded2(true);
            }
        )
  }, [])


if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
          <form onSubmit={handleSubmit}>
            <select id='currency' name='currency'>
              <option value="">select</option>
              {users.map(user => (<option value={user.CurrencyID}>{user.CurrencyID}</option>))}
            </select><br></br>

            <select id='project' name='project'>
              <option value="">select</option>
              {users2.map(user2 => (<option value={user2.ProjectID}>{user2.ProjectID}</option>))}
            </select><br></br>

            <input type="text" name="test" id="test" placeholder="First Name" />
            <br></br><br></br>
            <button variant="primary" type="submit">
            Submit
            </button>
          </form>
        );
    }
}
export default App;