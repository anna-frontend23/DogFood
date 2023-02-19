import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteComment } from '../../redux/slices/commentsSlice'
import { api } from '../Api/Api'
import { Stars } from '../Stars/Stars'
import productReview from './productReview.module.scss'

export const ProductReview = ({text, rating, author, reviewId}) => {
const [name, setName] = useState('')
const user = useSelector((store) => store.user)
const dispatch = useDispatch()
const {id} = useParams()


const setRating = (rating) => {
    let stars = []
    for (let i=0; i<rating; i++) {
        stars.push(<Stars key={i}/>)
    }
    return stars
}

async function getUserName(id) {
    let response = await api.getUserInfo(id)
    let result = await response.json()
    let name = result.name
    setName(name)
    return name
 }

 useEffect(() => {
    getUserName(author._id)
 }, [])

 async function deleteCommentFn(id, reviewId) {
    try {
       const response = await api.deleteComment(id, reviewId)
       const data = await response.json()
       dispatch(deleteComment(reviewId))
    } catch (error) {
       console.log(error)
    }
}



    return <>
    <div className={productReview.review_block}>

    <div className={productReview.review}>
    <span className={productReview.author}>{name}</span>
    <span className={productReview.stars}>{setRating(rating)}</span>
    <div className={productReview.text}>
    <span>{text} </span>
    {author && author._id === user._id &&
               <div className={productReview.icon}><i className="fa-solid fa-trash-can" onClick={() => deleteCommentFn(id, reviewId)}></i></div>
               }
    </div>
    </div>

    </div>
    

    </>
}