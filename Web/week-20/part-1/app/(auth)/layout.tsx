import { ReactNode } from "react";

// authLayout you written or not nothing happen 

export default function authLayout({children} : {
    children: ReactNode
}) {
    return <div>
        <div>Header</div>
        {children}
        <div>Footer</div>
    </div>
}