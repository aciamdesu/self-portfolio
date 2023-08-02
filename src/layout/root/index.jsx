import { Outlet } from "react-router-dom";

const Root = () => {
    return(
        <div className="page-wrapper">
            {/* <Navbar/> */}
            <Outlet/>
            {/* <Footer/> */}
        </div>
    )
}

export default Root