import { ErrorMessage, Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as Yup from 'yup';
import { addComment } from "../../redux/slices/commentsSlice";
import { api } from "../Api/Api";
import addCommentStyles from './addComment.module.scss'

export const AddComment = () => {

const dispatch = useDispatch()
const {id} = useParams()

    return (
        <Formik
        initialValues={{
            rating: '',
            text: ''
        }}
        validationSchema={Yup.object({
            text: Yup.string()
              .min(1, 'Напишите что-нибудь')
              .required('Обязательно'),
            rating: Yup.number()
              .positive()
              .min(1, 'Рейтинг не может быть меньше 0')
              .max(5, 'Рейтинг не может быть больше 5')
              .required('Обязательно')
        })}
        onSubmit={(values, onSubmitProps) => {
            api.addComment(values, id)
            .then(response => response.json())
            .then(data => {
              if(!data.error){
                //console.log(data)
                let comment = data.reviews[data.reviews.length-1]
                let newComment = {
                    ...comment,
                    author: {
                        _id: comment.author
                    }
                }
                onSubmitProps.resetForm()
                dispatch(addComment(newComment))
              }
            })
            
        }}>

            <Form className={addCommentStyles.addForm}>
                <Field className={addCommentStyles.field} name='rating' type='number' placeholder='Ваша оценка'/>
                <ErrorMessage name='rating'/>

                <Field className={addCommentStyles.field} name='text' type='text' placeholder='Ваш комментарий'/>
                <ErrorMessage name='text'/>
                <button type='submit' className={addCommentStyles.addBtn}>Оставить отзыв</button>
            </Form>

        </Formik>
    )
}