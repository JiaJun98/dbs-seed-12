import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import "../components/claims.css";


const ListClaims = () => {
    const [claims, setClaims] = useState([]);

    const getClaims = async () => {
        try {
            const post = await fetch('http://localhost:5000/claim', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + JSON.stringify(sessionStorage.getItem('token'))
                }
              })
            const jsonData = await post.json();

            setClaims(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };
    
    useEffect(() => {
        getClaims();
    }, []);

    const navigate = useNavigate();

    const navigateEdit = () => {
        navigate('/create');
      };
    return(
        <>
        <table className="styled-table">
            <thead>
                <tr>
                    <td>Claim ID</td>
                    <td>Project ID</td>
                    <td>Amount</td>
                    <td>Status</td>
                    <td>Actions</td>
                    <td> </td>
                    <td> </td>
                </tr>
            </thead>
            <tbody>
                {claims.map(claim => (
                    <tr key={claim._id}>
                        <td>{claim.ClaimID}</td>
                        <td>{claim.ProjectID}</td>
                        <td>{claim.Amount} {claim.CurrencyID}</td>
                        <td>{claim.Status}</td>
                        <td>{claim.ClaimID}</td>
                        {claim.Status!=='Approved'?
                        <td><button className="btn1" onClick={navigateEdit}>Edit</button>  
                        <button>Delete</button></td>: <td></td>}
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
};

export default ListClaims;

