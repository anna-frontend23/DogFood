import { Cart } from "./Cart"
import { Favourite } from "./Favourite"
import { User } from "./User"
import iconsStyles from './icons.module.scss'

export const Icons = () => {

    return (
        <div className={iconsStyles.icons}>
            <Favourite />
            <Cart />
            <User />
        </div>
    )
}