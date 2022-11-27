import MenuIcon from "@mui/icons-material/Menu";
import {NavLink} from "react-router-dom";
import {Icons, Navigation, RotateIcon} from "../Navbar/Navbar.styles";
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import {Icon} from "./VideoNavbar.styles";
import WidgetsTwoToneIcon from "@mui/icons-material/WidgetsTwoTone";
import {toggleSlid} from "../../Routes/Main Viceo Route/MainVideo";
import {useState} from "react";

export const VideoNavbar=({title, slide,setSlide, show,setShow})=>{

    const toggleSlid =()=>{
        return (setSlide(!slide),setShow(false))
    }
    return(
        <>
            <Navigation className={"padding"}>
                <h1 style={{fontSize:"25px"}}>Watch {title} trailer</h1>
                {
                    show &&    <RotateIcon>
                        <WidgetsTwoToneIcon fontSize={"large"} on onClick={toggleSlid}/>
                    </RotateIcon>
                }

            </Navigation>
        </>
    )
}