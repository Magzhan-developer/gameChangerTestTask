import styled from "styled-components";
import {useField} from "formik";
import {Container, FlexContainer} from "../../components/DisplayContainers.tsx";
import {fontSizes} from "../../_css/fontSizes.ts";
import Visibility from '@mui/icons-material/Visibility';
import { IconButton } from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";
import {useState} from "react";

type inputTypes = 'text' | 'number' | 'date' | 'email' | 'password';
interface inputAttributes{
    withoutForm:boolean
    name?:string
    type:inputTypes
    label?: string;
    placeholder?: string;
    value?: string | number;
    disabled?: boolean;
    [key:string]:any
}


const InputLabel = styled.span(
    ({
        color:'black',
        fontWeight: '600',
        fontSize:fontSizes.fs18,
    })
)
const InputComponent = styled.input(
    ({
        color:'black',
        padding: '1rem',
        fontSize:fontSizes.fs20,
        width:'100%',
        border:'none',
        outline: "none",
        boxShadow: 'none',
        '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0px 1000px white inset',
            WebkitTextFillColor: 'black',
            transition: 'background-color 5000s ease-in-out',
        },
})
)

function Input({label,withoutForm,...props}: inputAttributes){
    const [field,meta] = useField(props)
    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = () => {
        setShowPassword(!showPassword)
    };


    return (
        <FlexContainer $flexDirection={'column'} $alignItems={'flex-start'} $gap={'1rem'}>
            {
                label && <InputLabel>{label}</InputLabel>
            }
            <Container $display={'flex'} $justifyContent={'space-between'} $alignItems={'center'} $padding={'0 10px'} $width={"100%"} $border={'1px solid #00000024'} $borderRadius={'4px'} $boxSizing={'border-box'}>
                <InputComponent
                    {...field}
                    {...props}
                    type={props.type === 'password' ? (showPassword ? 'text' : 'password') : props.type}
                />
                {props.type === 'password' && (
                    <IconButton
                        style={{outline:'none',boxShadow:'none'}}
                        onClick={handleToggle}
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility/>}
                    </IconButton>
                )}
            </Container>
            {meta.touched && meta.error && (
                <span style={{ color: "red", fontSize: `${fontSizes.fs18}` }}>{meta.error}</span>
            )}
        </FlexContainer>
    );
}

export default Input