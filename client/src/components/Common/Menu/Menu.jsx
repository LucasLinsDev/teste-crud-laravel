import styles from './Menu.module.scss';
import {Link} from 'react-router-dom';
export function Menu(){
    return (
        <div className={styles.menu}>
            <Link to='/'>Users</Link>
        </div>
    )
}