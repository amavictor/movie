import {useState} from "react";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {LoginContainer, LoginForm} from "./login.styles";
import Logo from "../../assests/images/Logo.png";
import {Button} from "../Button/Button";
import {motion} from "framer-motion"
import {signUpWithEmailAndPassword} from "../../store/user/user.action";
import {emailAndPasswordSignUp} from "../../utils";


export const SignUp = ()=> {
    const {register, handleSubmit,reset,formState: {errors}} = useForm({
        defaultValues:{
            email:"",
            username:"",
            password:"",
            confirmPassword:""
        }
    })
    const [loading,setLoading] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const redirect =()=> navigate(location.state?.path || "/", {replace:true})
    const signUp =async (data)=>{
        const {email,password,username,confirmPassword}=data
        if(password!==confirmPassword){
            alert("Password doesn't match")
        }
        else{
            setLoading(true)
            dispatch(signUpWithEmailAndPassword(await emailAndPasswordSignUp(email,password,username,data)))
            reset()
            setLoading(false)
            redirect()
        }
    }
    return (
        <LoginContainer>
            <img src={Logo} alt={"logo"}/>

            <LoginForm onSubmit={handleSubmit(signUp)}>
                <label
                    htmlFor={"email"}
                >
                    <input
                        type={"email"}
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
                <Button disabled={loading}>{loading ? "Loading" : "Sign Up"}</Button>
            </LoginForm>
        </LoginContainer>
    )
}
