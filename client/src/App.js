import { Route, Routes } from "react-router-dom"
import Login from "./components/Login";
import { useState } from "react";
import CreateClaim from "./components/createClaim"
// import { Home } from "./Home"
// import { BookList } from "./BookList"

//Create Claim API


export function App() {
  const [token, setToken] = useState("")
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />} /> */}
      <Route path="/create" element={ <CreateClaim />} />
    </Routes>
  )
}
export default App;