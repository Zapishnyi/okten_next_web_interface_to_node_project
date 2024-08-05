import React from 'react';
import Link from "next/link";
import styles from "../Header.module.css";

const HeaderPublic = () => {
    return (
        <div className={styles.wrapper}>
            <div><Link href={"/"}>Logo</Link></div>
            <div>
                search
            </div>
            <ul className={styles.list}>
                <li><Link href={"/public/sing_up"}>Sing up</Link></li>
                <li><Link href={"/public/login"}>Login</Link></li>
            </ul>
        </div>
    );
};

export default HeaderPublic;