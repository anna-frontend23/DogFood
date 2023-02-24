import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Modal } from "../components/Modal/Modal"
import { UserDetailForm } from "../components/UserDetailForm/UserDetailForm"
import userDetailStyles from './userDetail.module.scss'

export const UserDetail = () => {

const navigate = useNavigate()
const dispatch = useDispatch()
const userInfo = useSelector((store) => store.user)
const [modalActive, setModalActive] = useState(false)

const signOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem('group')
        navigate('/signIn')
    }
    
    
    return (
        <>
        <div>
            <div className={userDetailStyles.container}>
                <span><Link to="/catalogue"><i className="fa-solid fa-arrow-left"></i></Link></span>
            <button className={userDetailStyles.logOutBtn} type="button" onClick={signOut}>Выход</button>
            </div>
            
            <UserDetailForm name={userInfo.name} avatar={userInfo.avatar} description={userInfo.about} email={userInfo.email} id={userInfo._id}/>
        </div>
        <button onClick={() => setModalActive(true)}>Редактировать</button>
        <Modal active={modalActive} setActive={setModalActive}>
            <p>Модалка</p>
        </Modal>
        </>
    )
}
 