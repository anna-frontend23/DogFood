
import { useNavigate } from "react-router-dom"
import headerStyles from "./header.module.scss"
import { Icons } from "./Icons/Icons"
import { Search } from "./Search/Search"

export const Header = () => {
 const navigate = useNavigate()
 const toCatalogueFn = () => {
    navigate('/catalogue')
 }   
  
    return (
        <div className={headerStyles.header}>
            <div className={headerStyles.logo}><i className="fa-solid fa-dog" onClick={toCatalogueFn}></i><span className={headerStyles.text} onClick={toCatalogueFn}>DogFood</span></div>
            <Search />
            <Icons />
        </div>
    )
}