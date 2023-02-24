import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import iconStyles from './icons.module.scss'

export const Cart = () => {
const navigate = useNavigate()

const CartFn = () => {
    navigate('/cart')
}

const cart = useSelector((store) => store.cart.goods)
const totalQuantityFn = () => {
    let total = 0
    cart.forEach((item) => {
        total += item.quantity
    })
    return total
}

    return (
        <div className={iconStyles.icon}>
        <span className={iconStyles.cart}><i className="fa-solid fa-bag-shopping" onClick={CartFn}></i><span className={iconStyles.total}>{totalQuantityFn() || 0}</span></span>
        </div>
    )
}