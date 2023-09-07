import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Sidenav from './components/Sidenav'
import { ApiProvider } from './context/apiContext'
import ProtectedRoute from './components/ProtectedRoute'

import HomePage from './pages/HomePage'
import EqupoPage from './pages/EqupoPage'
import PortafolioPage from './pages/PortafolioPage'
import ContactanosPage from './pages/ContactanosPage'
import RegistroPage from './pages/RegistroPage'
import LoginPage from './pages/LoginPage'
import DatesPage from './pages/DatesPage'
import DatesFormPage from './pages/DatesFormPage'
import ProfilePage from './pages/ProfilePage'
import { DateProvider } from './context/dateContex'



function App() {

  return (
    <ApiProvider>
      <DateProvider>
        <BrowserRouter>
        <Sidenav/>
          <Routes>
            <Route>
              {/*Rutas Publicas*/}
              <Route id='home' path='/' element={<HomePage />} />
              <Route id='equipo' path='/equipo' element={<EqupoPage />} />
              <Route id='portafolio' path='/portafolio' element={<PortafolioPage />} />
              <Route id='contactanos' path='/contactanos' element={<ContactanosPage />} />
              <Route id='contactanos' path='/registro' element={<RegistroPage />} />
              <Route id='contactanos' path='/login' element={<LoginPage />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              {/*Rutas Privadas*/}
              <Route id='contactanos' path='/dates' element={<DatesPage />} />
              <Route id='contactanos' path='/add-dates' element={<DatesFormPage />} />
              <Route id='contactanos' path='/dates/:id' element={<DatesFormPage />} />
              <Route id='contactanos' path='/profile' element={<ProfilePage />} />
            </Route>

          </Routes>
          <Footer />
        </BrowserRouter>
      </DateProvider>
    </ApiProvider>
  )
}


export default App
