import { Link } from 'react-router-dom';

// styles
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <nav className={styles['navbar__nav']}>
                    <h3 className={styles['nav__brand']}>
                        <Link to='/'>
                            <i className='fas fa-video'></i> TVmaze
                        </Link>
                    </h3>
                    <ul className={styles['nav__links']}>
                        <li className={styles['links__link']}>
                            <Link to='/'>HOME</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar