import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logos} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34dyR4PdRqvfNi_QIruoGyjHihGJrL98VuA&usqp=CAU' alt='' />
        </header>
    )
}
export default Header;