import {useState} from "react";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {LoginContainer, LoginForm} from "./login.styles";
import Logo from "../../assests/images/Logo.png";
import {Button} from "../Button/Button";
import {motion} from "framer-motion"

export const SignUp = ()=> {
    const {register, handleSubmit,reset, formState: {errors}} = useForm({})
    const [loading,setLoading] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const signUp =(data)=>{
        console.log(errors)
    }
    return (
        <LoginContainer>
            <img src={Logo} alt={"logo"}/>
            <LoginForm onSubmit={handleSubmit(signUp)}>
                <label
                    htmlFor={"email"}
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
                        >Email is required</motion.p>
                    )}
                </label>
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
                                required:true,
                                minLength: 8,
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
                        >Password is required</motion.p>
                    )}
                </label>

                <label
                    htmlFor={"Confirm password"}
                >
                    <input
                        type={"password"}
                        placeholder={"Confirm password"}
                        {
                            ...register("confirmPassword",{
                                required:true,
                                minLength:8,
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
                        >Password is required</motion.p>
                    )}
                </label>

                <Button>Sign In</Button>
            </LoginForm>
        </LoginContainer>
    )
}
