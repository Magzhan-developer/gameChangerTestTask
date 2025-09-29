import React, {type ReactNode} from "react";

interface WrapperProps {
    children: ReactNode;
}


const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <div className="wrapper-container">
            {children}
        </div>
    );
};

export default Wrapper