import React from "react";
import MuiButton from '@mui/material/Button';
import {fontSizes} from "../../_css/fontSizes.ts";

interface ButtonProps {
    text: string;
    type?:'submit' | 'reset' | 'button';
    icon?: React.ReactNode;
    iconOrder?: 'start' | 'end';
    loading?: boolean;
    disabled?: boolean;
    [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ text, icon,iconOrder, loading, disabled, ...rest }) => {
    return (
        <MuiButton
            startIcon={iconOrder === 'start' ? icon : undefined}
            endIcon={iconOrder === 'end' ? icon : undefined}
            disabled={disabled || loading}
            loadingPosition={rest.loadingPosition ? rest.loadingPosition : 'end'}
            type={rest.type ? rest.type : 'button'}
            style={{outline:'none',boxShadow:'none',background:'#0147FF',textTransform:'capitalize',padding:'10px 0',fontSize:`${fontSizes.fs18}`}}
            {...rest}
        >
            {text}
        </MuiButton>
    )
}
export default Button