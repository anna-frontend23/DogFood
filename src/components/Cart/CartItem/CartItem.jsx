import { useDispatch } from 'react-redux'
import { decrement, deleteFromCart, increment } from '../../../redux/slices/cartSlice'
import cartItemStyles from './cartItem.module.scss'

export const CartItem = ({name, price, picture, stock, id, quantity}) => {

const dispatch = useDispatch()


const deleteItemFn = () => {
dispatch(deleteFromCart(id))
}



    return (
        <>


        <div className={cartItemStyles.item}>

            <img src={`${picture}`} className={cartItemStyles.img} />
            <span className={cartItemStyles.name}><strong>{name}</strong></span> 
            <div className={cartItemStyles.quantityBtns}>
                <button className={cartItemStyles.incrDcrBtns} onClick={() => dispatch(decrement(id))}>-</button>
                <span className={cartItemStyles.quantity}>{quantity}</span>
                {quantity === stock
                ? <button className={cartItemStyles.incrDcrBtns} disabled>+</button>

                : <button className={cartItemStyles.incrDcrBtns} onClick={() => dispatch(increment(id))}>+</button>
                }
            </div>
            <strong><span>{price}₽</span></strong>
            <span className={cartItemStyles.trash}><i className="fa-solid fa-trash-can" onClick={deleteItemFn} /></span>
        </div>
        
        
        
        </>
    )
}