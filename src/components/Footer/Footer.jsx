import footerStyles from './footer.module.scss'

export const Footer = () => {

    return (
        <footer className={footerStyles.footer}>
           
            <div className={footerStyles.logo}>
                <div className={footerStyles.text}><i className="fa-solid fa-dog"></i>DogFood</div>
                <div>
                    <span className={footerStyles.copywright}>
                    <i className="fa-regular fa-copyright"></i>
                    </span>
                    <span className={footerStyles.copywrightText}>"Интернет-магазин DogFood.ru"</span>
                </div>
            
            </div>

            <div className={footerStyles.columns}>
                <span>Каталог</span>
                <span>Акции</span>
                <span>Новости</span>
                <span>Отзывы</span>
            </div>

            <div className={footerStyles.columns}>
                <span>Оплата и доставка</span>
                <span>Часто спрашивают</span>
                <span>Обратная связь</span>
                <span>Контакты</span>
            </div>

            <div className={footerStyles.contacts}>
                <span className={footerStyles.contactsPhone}>Мы на связи<br />
                8 (999) 00 - 00 - 00</span> <br />
                <span>dogfood@gmail.com</span><br />
                <div className={footerStyles.socialMedia}>
                <i className="fa-brands fa-telegram"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-vk"></i>
                </div>
            </div>
        
        </footer>
    )
}