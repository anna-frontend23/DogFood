
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import iconStyles from './icons.module.scss'

export const Favourite = () => {
const navigate = useNavigate()
const likes = useSelector((store) => store.likes)

const totalFavesFn = () => {
    let total = likes.length
    return total
}

const FavouritesFn = () => {
    navigate('/favourites')
}

 
    return (
        
        <div className={iconStyles.icon}>
       <span className={iconStyles.cart}><i className="fa-regular fa-heart" onClick={FavouritesFn}></i><span className={iconStyles.total}>{totalFavesFn()}</span></span>
        </div>
        
    )
}