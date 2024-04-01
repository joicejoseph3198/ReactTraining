import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"


const Container = () => {
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}
export default Container;