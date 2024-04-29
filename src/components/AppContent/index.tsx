import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import MainPage, { routeMain as routeMainPage } from 'pages/MainPage'
import CategoryListPage, { routeMain as routeNewsListPage } from 'pages/CategoryListPage'
import ShowDetailPage, { routeMain as routeNewsDetail } from 'pages/ShowDeteilPage'
import Contacts, { routeMain as routeContacts } from 'pages/Contacts'
import Error, { routeMain as routeError } from 'pages/Error'
import Header from 'components/Header'
import Footer from 'components/Footer'
import './styles.scss'
import routeSearch from 'pages/SearchShowNamePage/routes'
import SearchShowNamePage from 'pages/SearchShowNamePage'

const AppContent = () => {
  return (
    <div className='mainWrapper'>
      <Header />
      <main>
        <Routes>
          <Route path={routeMainPage()} element={<MainPage />} />
          <Route path={routeSearch()} element={<SearchShowNamePage />} />
          <Route path={routeNewsListPage()} element={<CategoryListPage />} />
          <Route path={routeNewsDetail()} element={<ShowDetailPage />} />
          <Route path={routeContacts()} element={<Contacts />} />
          <Route path='/' element={<Navigate replace to={routeMainPage()} />} />
          <Route path={routeError()} element={<Error />} />
          <Route path='*' element={<Navigate replace to={routeError()} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default AppContent
