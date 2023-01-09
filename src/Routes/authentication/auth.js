import {Login} from "../../component/signIn-signUp/Login";
import {LoginBackground, LoginContainer, LoginGlow, LoginGlow2, LoginSignUPContainer} from "./auth.styles";
import {useState} from "react";
import {SignUp} from "../../component/signIn-signUp/signUp";

export const Auth = () => {
    const [signUp, setSignUp] = useState(false)
    return(
        <>
            <LoginBackground>
                <LoginGlow2/>
                <LoginGlow/>
                <LoginSignUPContainer>
                    {
                        !signUp ?
                            <>
                                <Login/>
                                <p>Don't have an account? <i onClick={()=>setSignUp(!signUp)}>Sign up</i></p>
                            </>
                            :
                            <>
                                <SignUp/>
                                <p>Already have an account? <i  onClick={()=>setSignUp(!signUp)}>Sign in</i></p>
                            </>

                    }
                </LoginSignUPContainer>
            </LoginBackground>
        </>
    )
}