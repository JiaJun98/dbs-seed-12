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
            </select>
            <br></br><br></br>
            <button variant="primary" type="submit">
            Submit
            </button>
          </form>
        );
    }
}
export default App;