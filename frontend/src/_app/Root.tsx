import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routerProps} from "../_helpers/routerProps.ts";
import Layout from "../components/Layout.tsx";

function Root(){
    return(
        <BrowserRouter>
            <Routes>
                {
                    Object.keys(routerProps).map(key => {
                        const route = routerProps[key as keyof typeof routerProps];
                        const Component = route.component;

                        const isAuthPage = ['login','register'].includes(route.path)
                        return <Route
                            key={key}
                            path={route.path}
                            element={
                                isAuthPage ? <Component/>
                                    :
                                <Layout>
                                    <Component/>
                                </Layout>

                        }/>
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}

export default Root;