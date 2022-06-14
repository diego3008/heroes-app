import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DcScreen } from '../dc/DcScreen'
import { LoginScreen } from '../login/LoginScreen'
import { MarvelScreen } from '../Marvel/MarvelScreen'
import { SearchScreen } from '../search/SearchScreen'
import { Navbar } from '../ui/NavBar'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element={<DashboardRoutes />} />

            </Routes>
        </BrowserRouter>
    )
}
