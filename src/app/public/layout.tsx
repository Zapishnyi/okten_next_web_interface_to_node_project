import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "metadata"
}

type Props = { children: React.ReactNode }


const Layout = ({children}: Props) => {
    console.log(".")
    return (
        <div>
            {children}
        </div>

    );
}
export default Layout