import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import DayImg from './pages/DayImg/DayImg.jsx'
import Header from './components/Header/Header.jsx'
import EarthImg from './pages/EarthImg/EarthImg.jsx'


export default function RoutesApp(){
    return <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/photo' element={<DayImg />}></Route>
            <Route path='/earth' element={<EarthImg />}></Route>
        </Routes>
    </BrowserRouter>
}