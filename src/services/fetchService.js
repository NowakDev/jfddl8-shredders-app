import { mapObjectToArray } from './mapObjectToArray'

export const getConcertsFromBase = () => {
  return fetch('https://jfddl8-shredders.firebaseio.com/concertList.json')
    .then(r => r.json())
    .then(data => {
      const concerts = mapObjectToArray(data)
      console.log(concerts)
      return concerts
    })
}

export const addConcertsToBase = (concert) => {
  return fetch('https://jfddl8-shredders.firebaseio.com/concertList.json',
    {
      method: 'POST',
      body: JSON.stringify(concert)
    })

}
