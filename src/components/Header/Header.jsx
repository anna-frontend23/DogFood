
import headerStyles from "./header.module.scss"
import { Icons } from "./Icons/Icons"
import { Search } from "./Search/Search"

export const Header = () => {
    
    
    return (
        <div className={headerStyles.header}>
            <div className={headerStyles.logo}><i class="fa-solid fa-dog"></i><span className={headerStyles.text}>DogFood</span></div>
            <Search />
            <Icons />
        </div>
    )
}