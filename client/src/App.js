import { Route, Routes } from "react-router-dom"
import CreateClaim from "./components/createClaim"
import ListClaims from "./components/claims.js";
// import { Home } from "./Home"
// import { BookList } from "./BookList"

//Create Claim API


export function App() {
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
