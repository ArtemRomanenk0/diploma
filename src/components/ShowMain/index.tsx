import React from 'react'
import ShowItemMain from 'components/ShowItemMain'
import './styles.scss'
import { IShow } from 'types/IShow'

interface IShowListParamsShow {
  list: IShow[]
}

const ShowMain: React.FC<IShowListParamsShow> = ({ list }) => {
  const showOut = list.map((show) => {
    return <ShowItemMain key={show.show.id} item={show['show']} />
  })

  return (
    <div className='container show-wrapp'>
      <div className='row'>{showOut}</div>
    </div>
  )
}

export default ShowMain
