import userFormStyles from "./userDetailForm.module.scss"

export const UserDetailForm = ({name, avatar, email, description}) => {

    return (
        <>
        
        
        <form className={userFormStyles.form}>
        <img className={userFormStyles.profilePic} src={`${avatar}`}></img>
        <span>Имя: <input className={userFormStyles.input} value={name}></input></span>
        <span>E-mail: <input className={userFormStyles.input} value={email}></input></span>
        <span>О себе: <input className={userFormStyles.input} value={description}></input></span>
        </form>
        
        
        
        </>
    )
}