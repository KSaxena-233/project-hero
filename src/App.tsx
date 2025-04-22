import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Welcome to Project H.E.R.O.</div>} />
      </Routes>
    </Router>
  )
}

export default App 