import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserDetailForm } from "../components/UserDetailForm/UserDetailForm"
import { api } from './../components/Api/Api'
import userDetailStyles from './userDetail.module.scss'

export const UserDetail = () => {

const navigate = useNavigate()
const [userInfo, setUserInfo] = useState([])

const signOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("user.id");
        navigate('/signIn')
    }

async function userDetail() {
    try {
        const response = await api.userDetail();
        const data = await response.json();
        const values = Object.values(data);
        setUserInfo(values);
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    userDetail()
}, [])
    
let [name, description, avatar, , email ,] = userInfo;
    
    return (
        <div>
            <div className={userDetailStyles.container}>
                <span><Link to="/catalogue"><i className="fa-solid fa-arrow-left"></i></Link></span>
            <button className={userDetailStyles.logOutBtn} type="button" onClick={signOut}>Выход</button>
            </div>
            
            <UserDetailForm name={name} avatar={avatar} description={description} email={email}/>
        </div>
    )
}
 