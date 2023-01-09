import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuIcon from '@mui/icons-material/Menu';
import {Icons, Navigation} from "./Navbar.styles";
import Logo from "../../assests/images/Logo.png"
import {useLocation, useNavigate} from "react-router-dom";

export const Navbar =()=>{
    const navigate = useNavigate()
    const location = useLocation()
    return(
        <Navigation className={"padding"}>
            <img alt={"logo"} src={Logo} onClick={()=>navigate(location.state?.path || "/")}/>
            <div className={"hamburger"}>
                <MenuIcon/>
            </div>
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