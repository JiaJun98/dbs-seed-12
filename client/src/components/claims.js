import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import "../components/claims.css";


const ListClaims = () => {
    const [claims, setClaims] = useState([]);

    const getClaims = async () => {
        try {
            const post = await fetch('http://localhost:5000/claim')

            const jsonData = await post.json();

            setClaims(jsonData);
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
        LastEditedClaimDate: '2023-04-30T10:00:00+08:00'},
        {
        ClaimID: '11148',
        ProjectID: '10002',
        CurrencyID: 'IDR',
        EmployeeID: '10015',
        ExpenseDate: '2023-04-28T10:00:00+08:00',
        Amount: '250.75',
        Purpose: 'Operations',
        ChargeToDefaultDept: '0',
        AlternativeDeptCode: '',
        Status: 'Approved',
        LastEditedClaimDate: '2023-04-30T11:30:00+08:00'
        },
        {
        ClaimID: '11149',
        ProjectID: '10003',
        CurrencyID: 'JPY',
        EmployeeID: '10014',
        ExpenseDate: '2023-04-27T13:45:00+08:00',
        Amount: '500.00',
        Purpose: 'Banking operations',
        ChargeToDefaultDept: '0',
        AlternativeDeptCode: '',
        Status: 'Rejected',
        LastEditedClaimDate: '2023-04-30T12:15:00+08:00'
        },
        {
        ClaimID: '11150',
        ProjectID: '10004',
        CurrencyID: 'SGD',
        EmployeeID: '10018',
        ExpenseDate: '2023-04-26T15:30:00+08:00',
        Amount: '175.25',
        Purpose: 'Banking tech',
        ChargeToDefaultDept: '1',
        AlternativeDeptCode: '105',
        Status: 'Pending',
        LastEditedClaimDate: '2023-04-30T13:00:00+08:00'
        },
        {
        ClaimID: '11151',
        ProjectID: '10005',
        CurrencyID: 'KRW',
        EmployeeID: '10020',
        ExpenseDate: '2023-04-25T17:15:00+08:00',
        Amount: '350.00',
        Purpose: 'Banking operations',
        ChargeToDefaultDept: '0',
        AlternativeDeptCode: '',
        Status: 'Pending',
        LastEditedClaimDate: '2023-04-30T14:30:00+08:00'
        },
      ]
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

