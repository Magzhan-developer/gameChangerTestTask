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
    onClick?: () => void;
    [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ text, icon,iconOrder, loading, disabled,onClick, ...rest }) => {
    return (
        <MuiButton
            startIcon={iconOrder === 'start' ? icon : undefined}
            endIcon={iconOrder === 'end' ? icon : undefined}
            disabled={disabled || loading}
            loadingPosition={rest.loadingPosition ? rest.loadingPosition : 'end'}
            type={rest.type ? rest.type : 'button'}
            style={{outline:'none',boxShadow:'none',background:rest.bgColor,textTransform:'capitalize',padding:'10px',fontSize:`${fontSizes.fs18}`,color:rest.textColor}}
            onClick={onClick}
            {...rest}
        >
            {text}
        </MuiButton>
    )
}
export default Button