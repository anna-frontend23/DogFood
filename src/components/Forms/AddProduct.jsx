import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { addProduct } from "../../redux/slices/productsSlice";
import { api } from "../Api/Api";
import addProductForm from './addProducts.module.scss'

export const AddProduct = () => {

 const navigate = useNavigate()
 const dispatch = useDispatch()
 
    return (
<>
<Formik
    initialValues={{
        name: '',
        price: '',
        stock: '',
        description: '',
        pictures: '',
        discount: ''
    }}
    validationSchema = {Yup.object({
        name: Yup.string()
          .min(1, 'Введите название товара')
          .required('Обязательно'),
        price: Yup.number()
          .positive()
          .min(1, 'Цена не может быть меньше 1')
          .required('Обязательно'),
        stock: Yup.number()
          .positive()
          .min(0, 'Кол-во не может быть меньше 0'),
        description: Yup.string()
          .min(10, 'Введите описание товара')
          .required('Обязательно'),
        discount: Yup.number()
          .positive()
          .min(0, 'Скидка не может быть меньше 0%')
          .max(100, 'Скидка не может быть больше 100%'),
        pictures: Yup.string()
        .required('Обязательно')
      })
    }
    onSubmit={(values, onSubmitProps) => {
      const token = localStorage.getItem('token')
        api.addProduct(values, token)
          .then(response => response.json())
          .then(data => {
            //console.log(data)
            onSubmitProps.resetForm()
            dispatch(addProduct(data))
            navigate(`../${data._id}`)
          })
    }}>

<Form className={addProductForm.addForm}>
    <h1 className={addProductForm.h1}>Добавление товара</h1> 
    <Field className={addProductForm.field} name='name' placeholder='Название' type='text'/>
    <ErrorMessage name='name'/>

    <Field className={addProductForm.field} name='price' placeholder='Цена' type='number'/>
    <ErrorMessage name='price'/>

    <Field className={addProductForm.field} name='stock' placeholder='В наличии' type='number'/>
    <ErrorMessage name='stock'/>

    <Field className={addProductForm.field} as='textarea' name='description' placeholder='Описание' />
    <ErrorMessage name='description'/>

    <Field className={addProductForm.field} name='discount' placeholder='Скидка' type='number'/>
    <ErrorMessage name='discount'/>

    <Field className={addProductForm.field} name='pictures' placeholder='URL фото' type='text'/>
    <ErrorMessage name='pictures'/>
    
    <button className={addProductForm.addBtn} type='submit'>Добавить товар</button>
</Form>


</Formik>

</>
    )
}
