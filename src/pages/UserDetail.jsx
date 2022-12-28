import { useQuery } from "@tanstack/react-query"
import { Link, useNavigate } from "react-router-dom"
import { UserDetailForm } from "../components/UserDetailForm/UserDetailForm"
import { api } from './../components/Api/Api'
import userDetailStyles from './userDetail.module.scss'

export const UserDetail = () => {

const navigate = useNavigate()


const userDetailFn = async () => {
    let response = await api.userDetail();
    let result = await response.json();
    return result;  
}

const {
    data, isLoading, isError, error
} = useQuery({
    queryKey: ['userDetail'],
    queryFn: userDetailFn, 
})
 if (isLoading) return <span>Загружаем информацию о пользователе...</span>
 if (isError) {
    console.log(error.message)
    
    return (
        <div>Ошибка загрузки. Обновите страницу.</div>
    )
 }
 
 const {name, about, avatar, email} = data;
 
  
const signOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user.id");
    navigate('/signIn')
}

return (
    <div>
        <div className={userDetailStyles.container}>
            <span><Link to="/catalogue"><i className="fa-solid fa-arrow-left"></i></Link></span>
        <button className={userDetailStyles.logOutBtn} type="button" onClick={signOut}>Выход</button>
        </div>
        <div>
            {<UserDetailForm name={name} avatar={avatar} description={about} email={email}/>}
          
                
        
        </div>
    </div>
)

   
}
 