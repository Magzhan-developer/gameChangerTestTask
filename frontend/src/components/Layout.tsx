import Header from "./Header/Header.tsx";
import type {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode;
}


const Layout = ({ children } : LayoutProps) => {
    return(
        <>
            <Header/>
            <main style={{height: "100vh"}}>
                {children}
            </main>
        </>
    )
}

export default Layout;