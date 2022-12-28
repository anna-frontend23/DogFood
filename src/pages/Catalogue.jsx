

import { useQuery } from "@tanstack/react-query"
import { api } from "../components/Api/Api"
import { Card } from "../components/Card/Card"
import cardsStyles from './catalogue.module.scss'

export const Catalogue = () => {
    
const CatalogueFn = async () => {
    let response = await api.getAllProducts();
    let result = await response.json();
    let products = result.products;
    return products;  
}

const {
    data, isLoading, isError, error
} = useQuery({
    queryKey: ['catalogue'],
    queryFn: CatalogueFn,
    
})
 if (isLoading) return <span>Загружаем товары...</span>
 if (isError) {
    
    console.log(error.message)
    return (
        <div>Ошибка загрузки. Обновите страницу.</div>
    )
 }
 

  return <>
        <h1>Каталог товаров</h1>
        <div className={cardsStyles.cards}>
         {data?.map((el, i) => <Card key={"card_"+i} text={el.name} like={(i + 1) % 2 === 0} picture={el.pictures} price={el.price} stock={el.stock}/>)}
       </div>
        </>
    
}