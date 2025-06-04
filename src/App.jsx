import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Items from "./pages/Items.jsx"
import ContactPage from './pages/Contact.jsx';
import Home from "./pages/Home"
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" elements={< Home/>}/>
       <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>

  )
}



export default App;
