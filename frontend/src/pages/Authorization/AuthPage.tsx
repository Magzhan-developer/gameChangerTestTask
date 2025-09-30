import {Form, Formik} from "formik";
import * as yup from "yup";
import styled from "styled-components";
import Link from '@mui/material/Link';
import {Typography} from "@mui/material";
import {fontSizes} from "../../_css/fontSizes.ts";
import type {FormValues} from "../../_interfaces/LogInInterfaces.ts";
import Wrapper from "../../components/Wrapper.tsx";
import {Container, FlexContainer} from "../../components/DisplayContainers.tsx";
import Input from "../../_ui/Input/Input.tsx";
import Button from "../../_ui/Button/Button.tsx";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerUser} from "./AuthDucks.ts";
import type {AppDispatch} from "../../_helpers/store.ts";
const LogoTitle = styled.div(
    ({
        fontSize:fontSizes.fs56,
        color:'black',
        fontWeight:'bold',
        textTransform:'uppercase'
    })
)

const AuthTypeDesc = styled.div(
    ({
        fontSize:fontSizes.fs40,
        color:'black',
    })
)

const AuthImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  object-position: center;      
`;



function AuthPage() {
    const { pathname } = useLocation()
    const dispatch:AppDispatch = useDispatch()
    const initialValues: FormValues = {email: "", password: "", login:"", password_repeat:""};
    const LoginValidationSchema = yup.object().shape({
        login:yup.string().min(6,"Логин должен быть минимум 6 символов").required('Логин обязателен'),
        email:yup.string().email('Некорректный email').required('Email обязателен'),
        password: yup.string().min(6, "Пароль должен быть минимум 6 символов")
            .required("Пароль обязателен")
            .matches(/(?=.*[A-Z])/,'Пароль должен содержать хотя бы одну заглавную букву')
            .matches(/(?=.*\d)/,'Пароль должен содержать хотя бы одну цифру'),
        password_repeat: yup.string().min(6, "Пароль должен быть минимум 6 символов")
            .required("Повторное введение пароля необходимо")
            .oneOf([yup.ref("password")], 'Пароли должны совпадать'),
    })

    const formSubmit = (values:FormValues) =>{
        dispatch(registerUser(values))
    }

    return(
        <Wrapper>
            <FlexContainer $width={'100%'} $overflow={'hidden'} $borderRadius={'8px'} $border={'1px solid #00000024'}>
                <Container $display={'flex'} $flexDirection={'column'} $gap={'5rem'} $justifyContent={'center'} $backgroundColor={'white'} $boxSizing={'border-box'} $padding={'0 20rem'} $flexBasis={'55%'}>
                    <Container $display={'flex'} $flexDirection={'column'} $gap={'1rem'}>
                        <LogoTitle>{'Логотип'}</LogoTitle>
                        <AuthTypeDesc>{pathname === '/register' ? 'Регистрация' :'Вход'}</AuthTypeDesc>
                    </Container>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={formSubmit}
                        validationSchema={LoginValidationSchema}
                    >
                        <Form>
                            <Container $display={'flex'} $flexDirection={'column'} $gap={'1rem'}>
                                {
                                    pathname === '/register' && <Input withoutForm={false} placeholder={'Логин'} name={'login'} type={'text'} label={'Логин'} autoComplete={'new-username'}/>
                                }
                                <Input withoutForm={false} placeholder={'Email'} name={'email'} type={'text'} label={'Email'}  autoComplete={pathname === '/register' ? 'new-username' : 'username'} />
                                <Input withoutForm={false} name={'password'} type={'password'} label={'Пароль'}  autoComplete={pathname === '/register' ? 'new-username' : 'username'} />
                                {
                                    pathname === '/register' && <Input withoutForm={false} name={'password_repeat'} type={'password'} label={'Повторите пароль'} autoComplete={'new-username'}/>
                                }
                                <Button text={pathname === '/register' ? 'Отправить' : 'Вход'} type={'submit'} loadingPosition={'end'} variant={'contained'}/>
                                <Typography
                                    sx={{textTransform:"uppercase",color:'#AEAEAE',fontSize:`${fontSizes.fs18}`,verticalAlign:'middle',textAlign:'center'}}
                                >
                                    Или
                                </Typography>
                                <Link href={pathname === '/register' ? '/login' :'/register'} underline={'none'} style={{fontSize:`${fontSizes.fs18}`,marginTop:'-10px'}}>{pathname === '/register' ? 'Вход' :'Регистрация'}</Link>
                            </Container>

                        </Form>
                    </Formik>
                </Container>
                <Container $width={'45%'}>
                    <AuthImage src={'/images/loginPage/loginPage-car.png'} alt={'login page image'}/>
                </Container>
            </FlexContainer>
        </Wrapper>
    )
}

export default AuthPage;