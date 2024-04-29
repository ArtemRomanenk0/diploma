import { IShowCountry } from './IShowCountry'

export interface IShowNetwork {
  country: IShowCountry
  id?: number
  name?: string
  officialSite?: string
}
