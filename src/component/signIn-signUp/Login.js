import {Button} from "../Button/Button";
import {useForm} from "react-hook-form";
import {LoginContainer, LoginForm, LoginImage} from "./login.styles";
import Logo from "../../assests/images/Logo.png"
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {motion} from "framer-motion"

import {useLocation, useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword, signUpWithEmailAndPassword} from "../../store/user/user.action";
import {emailAndPasswordSignUp, firebaseDb, logInWithEmailAndPassword} from "../../utils";
import {selectUser} from "../../store/user/user.selector";

export const Login = () => {
    const [loading,setLoading] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const {register, handleSubmit,reset, formState: {errors}} = useForm({

    })

    const login =async data=>{
        const {email,password,username,confirmPassword}=data
        console.log(data)
        setLoading(true)
        dispatch(signInWithEmailAndPassword(await logInWithEmailAndPassword(email,password)))
        reset()
        setLoading(false)
        navigate(location.state?.path || "/", {replace:true})

    }
    return (
        <LoginContainer>
            <>
                <img src={Logo} alt={"logo"}/>
                <LoginForm onSubmit={handleSubmit(login)}>
                    <label
                        htmlFor={"Email"}
                    >
                        <input

                            placeholder={"Email"}
                            {
                                ...register("email",{
                                    required:true
                                })

                            }
                        />
                        {errors.username && errors.username.type === "required" && (
                            <motion.p
                                initial={{
                                    opacity:0,
                                    y:10,
                                }}
                                animate={{
                                    opacity:1,
                                    y:0
                                }}
                            >Username is required</motion.p>
                        )}
                    </label>
                    <label
                        htmlFor={"password"}
                    >
                        <input
                            type={"password"}
                            placeholder={"Password"}
                            {
                                ...register("password",{
                                    required:true
                                })
                            }
                        />
                        {errors.password && errors.password.type === "required" && (
                            <motion.p
                                initial={{
                                    opacity:0,
                                    y:10,
                                }}
                                animate={{
                                    opacity:1,
                                    y:0
                                }}
                            >Password is required.</motion.p>
                        )}
                    </label>
                    <Button disabled={loading}>{loading ? "Loading" : "Sign Up"}</Button>
                </LoginForm>
            </>

        </LoginContainer>
    )
}
