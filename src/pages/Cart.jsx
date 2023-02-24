import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { CartItem } from "../components/Cart/CartItem/CartItem"
import cartStyles from './cart.module.scss'

export const Cart = () => {
const cart = useSelector((store) => store.cart.goods)


const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach((item) => {
        totalQuantity += item.quantity
        totalPrice += item.price * item.quantity
    })
    return { totalPrice, totalQuantity }
}

    return (
        <>
        <div className={cartStyles.header}>
        <Link className={cartStyles.link} to="/catalogue">Каталог</Link>
        <h1 className={cartStyles.h1}>Корзина</h1>
        </div>
        <div className={cartStyles.wrapper}>
        <div className={cartStyles.items}>
        {cart && cart.length>0
        ?
        <div>
            
            {cart.map((el, i) => <CartItem key={i} name={el.text} picture={el.picture} id={el.id} price={el.price} stock={el.stock}  quantity={el.quantity} />)}
        </div>
        
   
        
        : <>
            
            <div className={cartStyles.empty}>
            <h3>Вы еще ничего не добавили в корзину</h3>
            </div>
        </>
        }
        </div>
        
       
        
        <div className={cartStyles.total}>

            <h4 className={cartStyles.h4}>Ваша корзина</h4>
            <div>
            <span>Итого ({getTotal().totalQuantity}): <strong>{getTotal().totalPrice}₽</strong></span>
            </div>
          
            
            <button className={cartStyles.orderBtn}>Оформить заказ</button>

        </div>
        </div>
</>
        
       
    )
}