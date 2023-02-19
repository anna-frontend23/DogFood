
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { api } from '../Api/Api'
import { editProduct } from '../../redux/slices/productsSlice';
import editProductStyles from './editProduct.module.scss'


export const EditProduct = ({product}) => {

const dispatch = useDispatch()
const id = product._id

async function handler(values) {
    try {
        const response = await api.editProduct(id, values)
        const data = await response.json()
        //console.log(data)
        dispatch(editProduct(data))
        alert('Изменения сохранены')
        
    } catch (error) {
        console.log(error)
    }
}

    return (
        <>
        <Formik
        initialValues={{
        name: product.name,
        price: product.price,
        stock: product.stock,
        description: product.description,
        pictures: product.pictures,
        discount: product.discount
    }}
    validationSchema = {Yup.object({
        name: Yup.string()
          .min(1, 'Введите название товара'),
        price: Yup.number()
          .positive()
          .min(1, 'Цена не может быть меньше 0'),
        stock: Yup.number()
          .positive()
          .min(0, 'Количество не может быть меньше 0'),
        description: Yup.string()
          .min(10, 'Введите описание товара'),
        discount: Yup.number()
          .positive()
          .min(0, 'Скидка не может быть меньше 0')
      })
    }
    
    onSubmit={(values) => {
        handler(values)
    }}>

<Form className={editProductStyles.editForm}>
    <h1 className={editProductStyles.h1}>Редактирование товара</h1> 
    <Field className={editProductStyles.field} name='name' placeholder='Название' type='text'/>
    <ErrorMessage name='name'/>

    <Field className={editProductStyles.field} name='price' placeholder='Цена' type='number'/>
    <ErrorMessage name='price'/>

    <Field className={editProductStyles.field} name='stock' placeholder='В наличии' type='number'/>
    <ErrorMessage name='stock'/>

    <Field className={editProductStyles.field} as='textarea' name='description' placeholder='Описание' />
    <ErrorMessage name='description'/>

    <Field className={editProductStyles.field} name='discount' placeholder='Скидка' type='number'/>
    <ErrorMessage name='discount'/>

    <Field className={editProductStyles.field} name='pictures' placeholder='URL фото' type='text'/>

    
    <button className={editProductStyles.editBtn} type='submit'>Сохранить</button>
</Form>
        </Formik>
        </>
    )
}