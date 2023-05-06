import { Route, Routes } from "react-router-dom"
import Login from "./components/Login";
import { useState } from "react";
// import { Home } from "./Home"
// import { BookList } from "./BookList"

export function App() {
  const [token, setToken] = useState("")
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />} /> */}
    </Routes>
  )
}
export default App;