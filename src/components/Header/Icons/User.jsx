import { useNavigate } from "react-router-dom"

export const User = () => {
const navigate = useNavigate();
const userDetail = () => {
    navigate('/userDetail')
}
    return (
        <i className="fa-regular fa-user" onClick={userDetail}></i>
    )
}