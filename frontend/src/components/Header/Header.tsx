import {Container} from "../DisplayContainers.tsx";
import Button from "../../_ui/Button/Button.tsx";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Header = () => {

    const { pathname } = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        console.log('pathname:',pathname)
    }, []);

    const navigateThroughApp = (path:string) => {
        navigate(path)
    }

    return (
        <Container $justifyContent={'flex-end'} $gap={'1rem'} $display={'flex'} $backgroundColor={'white'} $borderBottom={'1px solid #00000024'} $padding={'1rem'}>
            <Button onClick={() => navigateThroughApp('/dashboard')} bgColor={pathname === '/dashboard' ? '#0147FF' : '#00000008'} text={'Дэшборд'} textColor={pathname === '/dashboard' ? 'white' : 'black'} iconOrder={'start'} icon={<SpaceDashboardIcon/>}/>
            <Button onClick={() => navigateThroughApp('/profile')} bgColor={pathname === '/profile' ? '#0147FF' : '#00000008'} text={'Профиль'} textColor={pathname === '/profile' ? 'white' : 'black'} iconOrder={'start'} icon={<PersonOutlineIcon/>}/>
        </Container>
    )
}

export default Header