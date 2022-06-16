import { Navigate, useParams } from "react-router-dom"
import {getHeroById} from '../helpers'

export const HeroScreen = () => {

  const {id} = useParams()
  const hero = getHeroById(id)
  console.log(hero)

  if (!hero) {
    return <Navigate to="/marvel"/>
  }

  return (
    <div>
        <h1>HeroScreen</h1>
    </div>
  )
}
