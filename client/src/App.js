import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./components/Login";
import { useState } from "react";
import CreateClaim from "./components/createClaim"
import ListClaims from "./components/claims"
import useToken from './useToken';
import './App.css';

export function App() {
  const { token, setToken } = useToken();
  const navigate = useNavigate();
  console.log(sessionStorage.getItem('token'))
  if (!sessionStorage.getItem('token')) {
    return <Login setToken={setToken} navigate={navigate} />
  }
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />} /> */}
      <Route path="/create" element={ <CreateClaim />} />
      <Route path="/claims" element={ <ListClaims />} />
    </Routes>
  )
}
export default App;
