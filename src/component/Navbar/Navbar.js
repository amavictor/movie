import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuIcon from '@mui/icons-material/Menu';
import {Icons, Navigation, NotificationContainer} from "./Navbar.styles";
import Logo from "../../assests/images/Logo.png"
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../store/user/user.selector";
import {useEffect, useMemo, useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import {firebaseDb} from "../../utils";
import {selectLike} from "../../store/LikedCart/like.selector";
import {getLikes} from "../../store/LikedCart/like.action";

export const Navbar =()=>{
    const navigate = useNavigate()
    const location = useLocation()
    const user = useSelector(selectUser)
    const [loggedInUser,setLoggedInUser]= useState()


    // const movieLikes = useMemo(async()=>{
    //
    // },[likes,user])


    useEffect(()=>{
        const getUsername =async()=>{
            const userData = await getDoc(doc(firebaseDb,"users",user))
            const currentUser = (userData.data())
            setLoggedInUser(currentUser)
        }
        getUsername()
        console.log("Likes", loggedInUser?.LikedMovies)
        // dispatch(getLikes(movieLikes))
    },[user])


    console.log("This is loggedin user",loggedInUser)
    return(
        <Navigation className={"padding"}>
            <img alt={"logo"} src={Logo} onClick={()=>navigate(location.state?.path || "/")}/>
            <div className={"hamburger"}>
                <MenuIcon/>
            </div>
            <Icons>
                <NotificationContainer>
                    <div><p>{loggedInUser?.LikedMovies?.length}</p></div>
                    <NotificationsNoneIcon/>
                </NotificationContainer>
                <div>
                    <SearchIcon/>
                </div>
                <div>
                    {
                        user ? <p>{loggedInUser?.username}</p> :
                            <Link to={"/auth"}><PermIdentityIcon/></Link>
                    }

                </div>
            </Icons>

        </Navigation>
    )

}