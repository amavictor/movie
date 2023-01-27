import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuIcon from '@mui/icons-material/Menu';
import {Icons, Navigation, NotificationContainer, SignOutDropDown, UserSignOutComponent} from "./Navbar.styles";
import Logo from "../../assests/images/Logo.png"
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../store/user/user.selector";
import {useEffect,useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import {firebaseDb, signOutUser} from "../../utils";
import {signOut} from "../../store/user/user.action";

export const Navbar =()=>{
    const navigate = useNavigate()
    const location = useLocation()
    const user = useSelector(selectUser)
    const [loggedInUser,setLoggedInUser]= useState()
    const [signOutState, setSignOutState] = useState(false)
    const dispatch = useDispatch()


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
    const userSignOut = () => {
        dispatch(signOut( signOutUser()))
    }

    console.log("This is loggedin user",loggedInUser)
    return(
        <Navigation className={"padding"}>
            <img alt={"logo"} src={Logo} onClick={()=>navigate(location.state?.path || "/")}/>
            <div className={"hamburger"}>
                <MenuIcon/>
            </div>
            <Icons>
                <NotificationContainer>
                    {
                        loggedInUser?.LikedMovies ?
                        <div><p>{loggedInUser?.LikedMovies?.length}</p></div>
                            :
                            null
                    }

                    <NotificationsNoneIcon/>
                </NotificationContainer>
                <div>
                    <SearchIcon/>
                </div>
                <UserSignOutComponent>
                    {
                        user ? <p onMouseOver={()=>setSignOutState(!signOutState)}>{loggedInUser?.username}</p> :
                            <Link to={"/auth"}><PermIdentityIcon/></Link>
                    }
                    {
                        signOutState ?
                            <SignOutDropDown>
                                <p onClick={userSignOut}>Sign out</p>
                            </SignOutDropDown>
                            :
                        null
                    }

                </UserSignOutComponent>

            </Icons>

        </Navigation>
    )

}