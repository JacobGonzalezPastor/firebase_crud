import React from 'react' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarraNav from '../components/BarraNav'
import Monitores from '../pages/Monitores';
import Monitorias from '../pages/Monitorias';
const AppRouter = () => {
  return (
    <Router>
    <BarraNav />
    <Routes>
        <Route exact path='/' element={<Monitores />} />
        <Route exact path='/Monitorias' element={<Monitorias />} />
    </Routes>
</Router>
  )
}

export default AppRouter