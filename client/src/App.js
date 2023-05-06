import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./components/Login";
import { useState } from "react";
import CreateClaim from "./components/createClaim"
import ListClaims from "./components/claims"
import './App.css';

export function App() {
  const [token, setToken] = useState("")
  const navigate = useNavigate();

  if (!token) {
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
