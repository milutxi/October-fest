import styles from './header.module.scss'

type constantes = {
    title: string,
    subtitle: string,  
}

const Header = ({title, subtitle}:constantes) => {
    return(
        <div className={styles.header}>
        
          
        <h1 className={styles["header__title"]}>{title}</h1>
        <h2 className={styles["header__subtitle"]}>{subtitle}</h2>
       
        </div>
    )
}

export default Header;