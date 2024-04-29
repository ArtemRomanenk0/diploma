import { IShowAverage } from './IShowAverage'
import { IShowImage } from './IShowImage'
import { IShowNetwork } from './IShowNetwork'
import { IShowPreviousepisode } from './IShowPreviousepisode'

export interface IShowDetail {
  id?: number
  ended?: string
  premiered?: string
  genres: string[]
  image?: IShowImage
  name?: string
  rating?: IShowAverage
  summary?: string
  network?: IShowNetwork
  previousepisode?: IShowPreviousepisode
}
