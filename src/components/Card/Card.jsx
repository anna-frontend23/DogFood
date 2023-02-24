
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/slices/cartSlice';
import { deleteLike, getLikes, setLike } from '../../redux/slices/likesSlice';
import { api } from '../Api/Api';
import cardStyles from './card.module.scss'

export const Card = ({text, picture, price, id, stock }) => {
    const token = localStorage.getItem('token')
    const likes = useSelector((store) => store.likes)
    const product = useSelector((store) => {
        const currentProduct = store.products.find((el) => el._id === id)
        return currentProduct
    })
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

  

    const productDetail = () => {
        navigate(`../${id}`)
    }

    const setLikeFn = (e, id, token) => {
        e.stopPropagation()
        dispatch(setLike(product))
        api.setLike(id, token)
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                console.log(data.error)
            }
        })
        
    }

    const deleteLikeFn = (e, id, token) => {
        e.stopPropagation()
        dispatch(deleteLike(product))
        api.deleteLike(id, token)
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                console.log(data.error)
            } 
        })
        
    }

    const addToCartFn = (e) => {
        e.stopPropagation()
        dispatch(addToCart({id, text, picture, price, stock}))
    }

    return (
        
        <div className={cardStyles.card} onClick={productDetail}>
        <img className={cardStyles.img} src={`${picture}`}></img>
        <span>{text}</span>
        
        <span className={cardStyles.card__heart}>
            {
                likes.find((el) => el._id === id)
                ? <i className="fa-solid fa-heart" onClick={(e) => deleteLikeFn(e, id, token)}></i>
                : <i className="fa-regular fa-heart" onClick={(e) => setLikeFn(e, id, token)}></i>
            }
        </span>
        
       
        <span>{price} RUB</span>
        <span className={cardStyles.cartIcon}><i className="fa-solid fa-cart-plus" onClick={addToCartFn}></i></span>
        
    </div>
    

    )
}