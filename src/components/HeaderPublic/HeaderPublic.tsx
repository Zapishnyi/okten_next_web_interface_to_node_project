import React from 'react';
import Link from "next/link";

const HeaderPublic = () => {
    return (
        <div>
            <ul>
                <li><Link href={"/sing-up"}>Sing up</Link></li>
                <li><Link href={"/login"}>Login</Link></li>
            </ul>
        </div>
    );
};

export default HeaderPublic;