import React from 'react'
import { Capitulos } from '../Capitulos'
import { Header } from '../Header'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import { Home } from '../../routes/Home'
import { Anime } from '../../routes/Anime'

export const AppUi = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="anime" element={<Anime />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
