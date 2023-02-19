
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { api } from "../components/Api/Api"
import { Modal } from "../components/Modal/Modal"
import {EditProduct} from '../components/Forms/EditProduct'
import { ProductReview } from '../components/ProductReview/ProductReview'
import { deleteProduct } from '../redux/slices/productsSlice'
import { getProductComments } from "../redux/slices/commentsSlice"
import productStyles from './product.module.scss'
import { AddComment } from "../components/Forms/AddComment"

export const Product = () => {
    const user = useSelector((store) => store.user)
    const comments = useSelector((store) => store.comments)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showReviews, setShowReviews] = useState(false)
    const [modalActive, setModalActive] = useState(false)
    const {id} = useParams()

    const product = useSelector((store) => {
        const currentProduct = store.products.find((el) => el._id === id)
        return currentProduct
    })
    
const {name, pictures, price, description, author} = product

const getProductCommentsFn = (id) => {
    api.getProductComments(id)
    .then(res => res.json())
    .then(data => {
        if(!data.error) {
            dispatch(getProductComments(data))
        }
    })
}
useEffect(() => {
    getProductCommentsFn(id)
 }, [])



const productFn = async () => {
        let response = await api.productInfo(id)
        let data = await response.json()
        return data
    }
   
const {
        data, isLoading, isError, error
    } = useQuery({
        queryKey: ['product'],
        queryFn: productFn, 
    })
     if (isLoading) return <span>Загружаем информацию о товаре...</span>
     if (isError) {
        console.log(error.message)
        
        return (
            <div>Ошибка загрузки. Обновите страницу.</div>
        )
}


const deleteProductFn = (id) => {
        api.deleteProduct(id)
        .then(res => res.json())
        .then(data => {
            if (!data.error) {
                dispatch(deleteProduct(id))
                navigate('/catalogue')
            }
        })
        
}


return (
    <>
    
<div className={productStyles.wrapper}>

    <div className={productStyles.header}>
        <div className={productStyles.header_navigation}>
            <Link className={productStyles.link} to="/catalogue">Каталог</Link> 
            {author && author._id === user._id &&
            <div className={productStyles.navigation_icons}>
                <div className={productStyles.icon}><i className="fa-solid fa-pencil" onClick={() => setModalActive(true)}></i></div> 
                <div className={productStyles.icon}><i className="fa-solid fa-trash-can" onClick={() => deleteProductFn(id)} ></i></div>
            </div>}
        </div>  
        <h1 className={productStyles.h1}>{name || 'Страница товара'} </h1>
    </div>

    <div className={productStyles.main}>
        <img className={productStyles.img} src={`${pictures}`} alt='Фото товара'></img>

        <div className={productStyles.sidebar}>
            <span className={productStyles.price}>{price} руб.</span>
            <button className={productStyles.cartBtn}>В корзину</button>
            <span className={productStyles.favourite}><i className="fa-regular fa-heart"></i>В избранное</span>

            <div className={productStyles.delivery}>
            <i class="fa-solid fa-truck"></i>
            <span className={productStyles.sidebar_text}><h4 className={productStyles.h4}>Доставка по всему Миру! </h4><br/> Доставка курьером - от 399 руб. <br/> Доставка в пункт выдачи - от 199 руб.</span>
            </div>

            <div className={productStyles.guarantee}>
            <i class="fa-solid fa-medal"></i>
            <span className={productStyles.sidebar_text}><h4 className={productStyles.h4}>Гарантия качества!</h4> <br /> Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить Ваши нужды.</span>
            </div>
        </div>

        <div className={productStyles.description}>
        <h2>Описание</h2>
        {description}
        </div>
    </div>

    <h2 className={productStyles.h2} onClick={() => setShowReviews(!showReviews)}>Отзывы<>{showReviews ?<i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}</></h2> 
    
    <div>
       {comments && comments.length>0 && showReviews
       ? comments.map((el, i) => <ProductReview text={el.text} rating={el.rating} author={el.author} reviewId={el._id} key={i}/>)
       : <AddComment/>
       } 
    </div>
</div>

<Modal active={modalActive} setActive={setModalActive}>
<EditProduct product={data}/>
</Modal>
    </>
)

}