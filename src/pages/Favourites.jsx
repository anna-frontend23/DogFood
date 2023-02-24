
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Card } from "../components/Card/Card"
import favouritesStyles from './favourites.module.scss'

export const Favourites = () => {
const likes = useSelector((store) => store.likes)


    return (
        <div>
        <div className={favouritesStyles.header}>
        <Link className={favouritesStyles.link} to="/catalogue">Каталог</Link>
        <h1 className={favouritesStyles.h1}>Избранные товары</h1>
        </div>
        
        { likes && likes.length>0 
        ? <>
        <div className={favouritesStyles.cards}>
        { likes.map((el, i) => <Card key={"card_"+i} preLoadedLikes={el.likes} id={el._id} text={el.name} picture={el.pictures} price={el.price} stock={el.stock}/>) }
        </div>
        </>
        : <div className={favouritesStyles.empty}><h3>Вы еще ничего не добавили в избранное</h3></div> }
        </div>
    )
}