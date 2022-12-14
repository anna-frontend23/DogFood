import cardStyles from './card.module.scss'

export const Card = ({text, like, picture, price, stock}) => {

    return (
        <div className={cardStyles.card}>
        <img className={cardStyles.img} src={`${picture}`}></img>
        <span>{text}</span>
        <span>{price} RUB</span>
        <span>{stock} шт</span>
        <span className={cardStyles.card__heart}>
            {
                like 
                ? <i className="fa-solid fa-heart"></i>
                : <i className="fa-regular fa-heart"></i>
            }
        </span>
    </div>
    )
}