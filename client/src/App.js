import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./components/Login";
import { useEffect, useState } from "react";
import CreateClaim from "./components/createClaim"

export function App() {
  const [token, setToken] = useState("")
  const navigate = useNavigate();

  if (!token) {
    return <Login setToken={setToken} navigate={navigate} />
  }
  return (
    <Routes>
      <Route path="/create" element={ <CreateClaim />} />
    </Routes>
  )
}
export default App;