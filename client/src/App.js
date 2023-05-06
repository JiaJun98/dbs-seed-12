import { Route, Routes } from "react-router-dom"
import CreateClaim from "./components/createClaim"
// import { Home } from "./Home"
// import { BookList } from "./BookList"

export function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />} /> */}
      <Route path="/create" element={ <CreateClaim />} />
    </Routes>
  )
}
export default App;