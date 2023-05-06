import './App4.css';
import React, { useState, useEffect }  from 'react';


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
            <ul>
                {users.map(user => (
                <li key={user.id}>
                    {user.CurrencyID} 
                </li>
                ))}
            </ul>
        );
    }
}
export default App4;