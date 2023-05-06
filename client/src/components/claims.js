import React, { useEffect, useState } from "react";

const ListClaims = () => {
    const [claims, setClaims] = useState([]);

    const getClaims = async () => {
        try {
            const post = await fetch("http://localhost:5000/claims")
        } catch (error) {
            console.error(error.message);
        }
    };
    
    useEffect(() => {
        getClaims();
    }, []);

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
                {claims.map(claim => (
                    <tr key={claim._id}>
                        <td>{claim.ClaimID}</td>
                        <td>{claim.ProjectID}</td>
                        <td>{claim.Amount} {claim.CurrencyID}</td>
                        <td>{claim.Status}</td>
                        <td>{claim.ClaimID}</td>
                        <td>
                            <div class="dropout">
                                <button class="more">
                                <span></span>
                                <span></span>
                                <span></span>
                                </button>
                                <ul>
                                <li>
                                    Edit
                                </li>
                                <li>
                                    Delete
                                </li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
};

export default ListClaims;

