import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { MarvelScreen } from '../Marvel/MarvelScreen'
import { SearchScreen } from '../search/SearchScreen'
import { DcScreen } from '../dc/DcScreen'
import { Navbar } from '../ui/NavBar'
import { HeroScreen } from '../hero/HeroScreen'

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />
                <Route path="search" element={<SearchScreen />} />
                {/*Ruta para el hero*/}
                <Route path="hero/:id" element={<HeroScreen />} />
                <Route path="/" element={<MarvelScreen />} />

        </Routes>
    </>
  )
}
