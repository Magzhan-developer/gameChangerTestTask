import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routerProps} from "../_helpers/routerProps.ts";

function Root(){
    return(
        <BrowserRouter>
            <Routes>
                {
                    Object.keys(routerProps).map(key => {
                        const route = routerProps[key as keyof typeof routerProps];
                        const Component = route.component;
                        return <Route key={key} path={route.path} element={<Component/>}/>
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}

export default Root;