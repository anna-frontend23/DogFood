import { useMutation } from "@tanstack/react-query";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { api } from "../components/Api/Api";
import signUpStyles from './signUp.module.scss'


export const SignUp = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const sendForm = () => {
    const body = {
        email,
        password,
    }
    api.signUp(body)
    .then(res => {
        if(res.status === 409) {
            throw Error("Пользователь уже существует.")
        }
        return res.json()
    })
    .then(data => {
        navigate('../signIn')
    })
    .catch(err => {
        alert("Пользователь уже существует. Авторизуйтесь.")
        navigate('../signIn')
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
    mutate( {
        onSuccess: () => {
            navigate('/catalogue')
        }
    }
    );
    
}

    return (
        <>
        <div className={signUpStyles.arrow}><Link to="/signIn"><i className="fa-solid fa-arrow-left"></i></Link></div>
        <form className={signUpStyles.container} onSubmit={handleSubmit}>
            
            <h2>Регистрация</h2>
            <div className={signUpStyles.fields}>
            <input className={signUpStyles.input} type="email" required placeholder="Введите e-mail" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
            <input className={signUpStyles.input} type="password" required placeholder="Введите пароль" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>

            <button className={signUpStyles.signUpBtn} type='submit'>Зарегистрироваться</button>
            </div>
        </form>
        
        </>
    )
}