import {Buttons} from "./Button.styles";


export const Button =({children,type,size,...otherProps})=>{
    return(
        <Buttons type={type} size={size} {...otherProps}>{children}</Buttons>
    )
}