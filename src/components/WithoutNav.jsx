import React from 'react'
import Cursor from './feature/Cursor'
import { Outlet } from 'react-router-dom'

export const WithoutNav = () => {
  return (
    <>
      <Cursor />
      <Outlet />
    </>
  )
}
