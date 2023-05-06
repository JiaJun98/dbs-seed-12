import React, { useEffect, useState } from "react";



const ListClaims = () => {
    const [claims, setClaims] = useState([]);

    const getClaims = async () => {
        try {
            const post = await fetch('http://localhost:5000/claims')
        } catch (error) {
            console.error(error.message);
        }
    };
    
    useEffect(() => {
        getClaims();
    }, []);

    const claim2 = [
        {ClaimID: '11147',
        ProjectID: '10001',
        CurrencyID: 'SGD',
        EmployeeID: '10011',
        ExpenseDate: '2023-04-29T08:30:00+08:00',
        Amount: '100.50',
        Purpose: 'Banking tech',
        ChargeToDefaultDept: '0',
        AlternativeDeptCode: '',
        Status: 'Pending',
        LastEditedClaimDate: '2023-04-30T10:00:00+08:00'}
      ]


    return(
        <>
        <table>
            <thead>
                <tr>
                    <td>Claim ID</td>
                    <td>Project ID</td>
                    <td>Amount</td>
                    <td>Status</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {claim2.map(claim => (
                    <tr key={claim._id}>
                        <td>{claim.ClaimID}</td>
                        <td>{claim.ProjectID}</td>
                        <td>{claim.Amount} {claim.CurrencyID}</td>
                        <td>{claim.Status}</td>
                        <td>{claim.ClaimID}</td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
};

export default ListClaims;

