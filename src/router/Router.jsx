import React from 'react'
import { HomePage, ProjectPage, WebsitesPage } from '../pages'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/projects/:slug" element={<ProjectPage />}></Route>
      <Route path="/websites/" element={<WebsitesPage />}></Route>
    </Routes>
  )
}

export default Router
