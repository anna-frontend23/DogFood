import signInStyles from './signIn.module.scss'
import { api } from "../components/Api/Api";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useMutation} from '@tanstack/react-query';

export const SignIn = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("")
const navigate = useNavigate();

const sendForm = () => {
    
    const body = {
        email,
        password
    }
    api.signIn(body)
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem("user.id", data.data._id);
            localStorage.setItem("token", data.token);
        })
}     

const {mutate} = useMutation(sendForm, {
    onSuccess: () => {
        setEmail('');
        setPassword('');
    }
})

const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
    navigate('/catalogue');
}

    return (
        <>
    <form className={signInStyles.container} onSubmit={handleSubmit}>
        <h2>Авторизация</h2>
        <div className={signInStyles.fields}>
        <input className={signInStyles.input}
            type="email" 
            placeholder="E-mail" 
            value={email} 
            required
            onChange={(e) => {setEmail(e.target.value)}}
        />
        <input className={signInStyles.input}
            type="password" 
            placeholder="Пароль" 
            value={password} 
            onChange={(e) => {setPassword(e.target.value)}}
        />
        </div>
        <div className={signInStyles.fields}>
        <button className={signInStyles.signInBtn} type='submit'>Войти</button>
        <button className={signInStyles.signInBtn} type='button'><Link to="/signUp" style={ {color: 'white', textDecoration: 'none'} }>Зарегистрироваться</Link></button>
        </div>
    </form>
        
        </>
    )
}