
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { api } from "../components/Api/Api"
import { Card } from "../components/Card/Card"
import cardsStyles from './catalogue.module.scss'
import { getProducts } from "../redux/slices/productsSlice"
import { Modal } from "../components/Modal/Modal"
import {AddProduct} from '../components/Forms/AddProduct'
import { getUserInfo } from "../redux/slices/userSlice"


export const Catalogue = () => {

const token = localStorage.getItem('token')
let searchValue = useSelector((store) => store.search)
let products = useSelector((store) => store.products)
const [modalActive, setModalActive] = useState(false)

const dispatch = useDispatch()

    async function catalogue(token) {
       try {
            const response = await api.getAllProducts(token);
            const data = await response.json();
            let products = data.products.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase()))
            dispatch(getProducts(products))
       } catch (error) {
        console.log(error)
       } 
    }

    useEffect(() => {
        if (token) {
        catalogue(token)
        }
    }, [searchValue])

    async function userDetail() {
        try {
            const response = await api.userDetail();
            const data = await response.json();
            //console.log(data)
            dispatch(getUserInfo(data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (token) {
            userDetail()
            }
    }, [])


    return(
<>

    {searchValue === '' 
     ? <>
            <div className={cardsStyles.header}> 
            <h1>Каталог товаров</h1> 
            <span className={cardsStyles.add}>
                <i className="fa-solid fa-square-plus" onClick={() => setModalActive(true)}></i>
            </span>
            </div>
            <div className={cardsStyles.cards}>
            {products?.map((el, i) => <Card key={"card_"+i} id={el._id} text={el.name} picture={el.pictures} price={el.price} stock={el.stock}/>)}
            </div>

            <Modal active={modalActive} setActive={setModalActive} >
            <AddProduct/>
            </Modal>
        </>

   
    :   <>
             
            <h1>Каталог товаров</h1>
            <div className={cardsStyles.cards}>
            {products.map((el, i) => <Card key={"card_"+i} id={el._id} text={el.name} like={(i + 1) % 2 === 0} picture={el.pictures} price={el.price} />)}
            </div>
        </>


    }
</>
    )
}