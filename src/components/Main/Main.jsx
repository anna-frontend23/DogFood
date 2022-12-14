


import {Outlet, useNavigate} from "react-router-dom"
import { useEffect } from "react"
import mainStyles from './main.module.scss'

export const Main = () => {

    const navigate = useNavigate()
    let token = localStorage.getItem('token')
   
    useEffect(() => {
    if (token) {
            navigate('/catalogue')
           } else {
            navigate('/signIn')
           }
   }, [])



    return (
        <div className={mainStyles.main__container}>
            <Outlet />
        </div>
    )
}