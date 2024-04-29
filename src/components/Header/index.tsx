import React from 'react'
import './styles.scss'
import { NavLink } from 'react-router-dom'
import { routeMain as routeMainPage } from 'pages/MainPage'
import { routeMain as routeNewsListPage } from 'pages/CategoryListPage'
import { routeMain as routeContacts } from 'pages/Contacts'
import routeSearch from 'pages/SearchShowNamePage/routes'

const Header = () => {
  return (
    <header className='mainHeader'>
      <div className='title'>Best Films</div>
      <nav>
        <NavLink
          to={routeMainPage()}
          className={({ isActive }) => (isActive ? 'linkActive' : 'none')}
        >
          Главная
        </NavLink>
        <NavLink
          to={routeNewsListPage()}
          className={({ isActive }) => (isActive ? 'linkActive' : 'none')}
        >
          Фильмы по категориям
        </NavLink>
        <NavLink
          to={routeSearch()}
          className={({ isActive }) => (isActive ? 'linkActive' : 'none')}
        >
          Поиск
        </NavLink>
        <NavLink
          to={routeContacts()}
          className={({ isActive }) => (isActive ? 'linkActive' : 'none')}
        >
          Контакт
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
