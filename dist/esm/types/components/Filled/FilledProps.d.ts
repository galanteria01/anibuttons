import React from "react";
export default interface FilledProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    textAlign?: 'left' | 'center' | 'right';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    backgroundColor?: any;
    color?: any;
    hoverColor?: any;
    activeColor?: any;
    disabledColor?: any;
}
