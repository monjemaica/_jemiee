import React from 'react'
import Navbar from './Navbar'
import Cursor from './feature/Cursor'
import { Outlet } from 'react-router-dom'

export const WithNav = () => {
    return (
        <>
            <Navbar />
            <Cursor />
            <Outlet />
        </>
    )
}
