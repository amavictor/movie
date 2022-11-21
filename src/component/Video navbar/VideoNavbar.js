import MenuIcon from "@mui/icons-material/Menu";
import {NavLink} from "react-router-dom";
import {Icons, Navigation} from "../Navbar/Navbar.styles";
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import {Icon} from "./VideoNavbar.styles";

export const VideoNavbar=({title})=>{
    return(
        <>
            <Navigation className={"padding"}>
                <h1 style={{fontSize:"25px"}}>Watch {title} trailer</h1>
            </Navigation>
        </>
    )
}