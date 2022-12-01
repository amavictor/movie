import {NavLink} from "react-router-dom";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuIcon from '@mui/icons-material/Menu';
import {Icons, Navigation} from "./Navbar.styles";
import Logo from "../../assests/images/Logo.png"

export const Navbar =()=>{
    return(
        <Navigation className={"padding"}>
            <img src={Logo}/>
            <div className={"hamburger"}>
                <MenuIcon/>
            </div>
{/*
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/"}>Movies</NavLink></li>
                <li><NavLink to={"/"}>Categories</NavLink></li>
                <li><NavLink to={"/"}>Pricing</NavLink></li>
                <li><NavLink to={"/"}>About</NavLink></li>
            </ul>*/}

            <Icons>
                <div>
                    <NotificationsNoneIcon/>
                </div>
                <div>
                    <SearchIcon/>
                </div>
                <div>
                    <PermIdentityIcon/>
                </div>
            </Icons>

        </Navigation>
    )

}