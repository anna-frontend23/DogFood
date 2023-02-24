import { useNavigate } from "react-router-dom"
import iconStyles from './icons.module.scss'

export const User = () => {
const navigate = useNavigate();
const userDetail = () => {
    navigate('/userDetail')
}
    return (
        <div className={iconStyles.icon}>
        <i className="fa-regular fa-user" onClick={userDetail}></i>
        </div>
    )
}