import {Typography} from "@mui/material";
import styled from "styled-components";
import {FlexContainer,Container} from "../../components/DisplayContainers.tsx";
import {ordersMockData} from "../../assets/mockData.ts";
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {fontSizes} from "../../_css/fontSizes.ts";
import Button from "../../_ui/Button/Button.tsx";
import FileUploadIcon from '@mui/icons-material/FileUpload';


const BasicCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;
    border-radius: 8px;
    background: #F1F4F5;    
    cursor: pointer;
    width: 100%;
    height: 100%;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #00000024;
    border-radius: 8px;
`

const DashboardPage  = () => {

    return(
        <FlexContainer $flexDirection={'column'} $alignItems={'flex-start'} $padding={'2rem'} $height={'100%'}>
            <Typography variant='h2'>{'Привет, Алим Джолдаспаев 👋️'}</Typography>
            <Container $width={'100%'} $display={'grid'} $gridTemplateColumns={'2fr 1fr'} style={{alignItems: 'start'}}>
                <Wrapper>
                    <Typography variant={'h5'} style={{fontWeight:'bold',borderLeft:'3px solid #0147FF',boxSizing:'border-box',paddingLeft:'10px'}}>{'Заказы'}</Typography>
                    <Swiper spaceBetween={30} slidesPerView={'auto'} style={{width:'100%'}}>
                        {
                            ordersMockData.map(order => {
                                return <SwiperSlide key={order.imagePath} style={{maxWidth:'25%',alignSelf:'end'}}>
                                    <BasicCard>
                                        <img src={'/images/mockDataImages/' + order.imagePath} alt={'order_' + order.imagePath} style={{width:'100%',objectFit:'cover',aspectRatio:'1/1',alignSelf:'flex-start'}}/>
                                        <Typography style={{fontSize:fontSizes.fs20}}>{order.title}</Typography>
                                        <Button text={'Скачать'} iconOrder={'start'} icon={<FileUploadIcon/>} textColor={'white'} bgColor={'#0147FF'}/>
                                    </BasicCard>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </Wrapper>
            </Container>
        </FlexContainer>
    )
}

export default DashboardPage