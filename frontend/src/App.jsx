import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SinglePageBlog from './pages/SinglePageBlog'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<SinglePageBlog />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
