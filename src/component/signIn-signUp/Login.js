import {Button} from "../Button/Button";
import {useForm} from "react-hook-form";
import {LoginContainer, LoginForm, LoginImage} from "./login.styles";
import Logo from "../../assests/images/Logo.png"
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {motion} from "framer-motion"

import {useLocation, useNavigate} from "react-router-dom";

export const Login = () => {
    const [loading,setLoading] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const {register, handleSubmit,reset, formState: {errors}} = useForm({

    })

    const login =data=>console.log(data)
    return (
        <LoginContainer>
            <img src={Logo} alt={"logo"}/>
            <LoginForm onSubmit={handleSubmit(login)}>
                <label
                    htmlFor={"username"}
                >
                    <input

                        placeholder={"Username"}
                        {
                        ...register("username",{
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

                <Button>Sign In</Button>
            </LoginForm>
        </LoginContainer>
    )
}
