import {Link, Navigate, Outlet} from 'react-router-dom';
import { Header } from '../../Common/Header';
import styles from './Layout.module.scss';
export function Layout(){
    return(
        <div>
            <Header/>
            <div className={styles.container}>
            <Outlet/>
            </div>
        
        </div>
    )
}