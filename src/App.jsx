//Components
import Landing from './views/landing/landing.component'
import Home from './views/home/home.component'
import Detail from './views/Detail/detail.component';
import Create from './views/create/create.component';
import SearchBar from './components/searchbar/searchbar.component';
//Commons imports
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react'
//Styles
import './App.css'


function App() {
const location=useLocation()
const [num, setNum] = useState(0)
const nav=()=>{return location.pathname.includes('/detail')? <SearchBar/>:null}

  return (
    <>
    {nav()}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home num={num} setNum={setNum} />} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/create' element={<Create />}/>
      </Routes>
    </>
  )
}

export default App
