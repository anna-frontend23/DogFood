
import { useEffect, useState } from "react"
import { api } from "../components/Api/Api"
import { Card } from "../components/Card/Card"
import cardsStyles from './catalogue.module.scss'

export const Catalogue = () => {
const [products, setProducts] = useState([]);

    async function catalogue() {
       try {
        const response = await api.getAllProducts();
        const data = await response.json();
        setProducts(data.products)
        //console.log(data.products)
       } catch (error) {
        console.log(error)
       } 
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
        catalogue()
        }
    }, [])
    

    return(
        <>
        <h1>Каталог товаров</h1>
        <div className={cardsStyles.cards}>
            {products.map((el, i) => <Card key={"card_"+i} text={el.name} like={(i + 1) % 2 === 0} picture={el.pictures} price={el.price} stock={el.stock}/>)}
       </div>
        </>
    )
}