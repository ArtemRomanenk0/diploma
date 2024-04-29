import React from 'react'
import routeMain from './routes'
import Artem from 'assets/img/Artem.jpg'
import './styles.scss'

const Contacts = () => {
  return (
    <section className='contactsPage'>
      <div className='info'>
        <div className='phone'>
          <a href='tel: +79803634829'> +7-(980)-363-48-29 </a>
        </div>
        <div className='name'>
          Артем <br /> Романенко
        </div>
        <div className='mail'>
          <a href='mailto:romanenkomj@gmail.com'>romanenkomj@gmail.com</a>
        </div>
        <div className='position'> Frontend Developer </div>
        <div className='technologies'>HTML CSS JS</div>
      </div>
      <div className='image'>
        <img src={Artem} alt={Artem} />
      </div>
    </section>
  )
}

export { routeMain }
export default Contacts
