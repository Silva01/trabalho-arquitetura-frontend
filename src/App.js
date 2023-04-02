import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import PostList from './components/PostList'
import About from './components/About'
import Description from './components/Description'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route path="/" exact element={<PostList/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/description" element={<Description/>} />
          </Routes>
        </Container>
      </div>
    </Router>
  )
}

export default App