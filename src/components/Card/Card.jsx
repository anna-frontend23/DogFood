import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cardStyles from './card.module.scss'

export const Card = ({text, picture, price, id }) => {
    let user = useSelector((store) => store.user)
    const navigate = useNavigate();
    
    const productDetail = () => {
        navigate(`../${id}`)
    }

    const like = id === user.id

    return (
        
        <div className={cardStyles.card} onClick={productDetail}>
        <img className={cardStyles.img} src={`${picture}`}></img>
        <span>{text}</span>
        
        <span className={cardStyles.card__heart}>
            {
                like 
                ? <i className="fa-solid fa-heart"></i>
                : <i className="fa-regular fa-heart"></i>
            }
        </span>
        
        
        <span>{price} RUB</span>
        <span className={cardStyles.cartIcon}><i class="fa-solid fa-cart-plus"></i></span>
        
    </div>
    

    )
}