import React from 'react'
import styles from './styles.module.scss';
import iconLogo from '../../assets/icon_logo.png';
import iconNotifications from '../../assets/icon_notifications.png';
import iconAccount from '../../assets/icon_account.png';

export default function Nav (){
        return (
            <div className={styles.nav}>
                <div className={styles.content}>
                   <div className={styles.icon_logo}>
                    <img src={iconLogo} alt=""></img>
                </div>
                <div className={styles.icon_notifications}>      
                    <img src={iconNotifications} alt=""></img> 
                </div>
                <div className={styles.icon_account}> 
                    <img src={iconAccount} alt=""></img>
                    </div>
                </div>
            </div>
        )
    }
