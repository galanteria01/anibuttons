import React from 'react';

interface FlatProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    textAlign?: 'left' | 'center' | 'right';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    color?: string;
    hoverColor?: string;
    activeColor?: string;
    disabledColor?: string;
}

declare const Flat: React.FunctionComponent<FlatProps>;

interface FilledProps extends React.HTMLAttributes<HTMLButtonElement> {
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

declare const Filled: React.FunctionComponent<FilledProps>;

interface OutlinedProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    textAlign?: 'left' | 'center' | 'right';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    borderColor?: string;
    borderRadius?: number;
    color?: string;
    hoverColor?: string;
    activeColor?: string;
    disabledColor?: string;
}

declare const Outlined: React.FunctionComponent<OutlinedProps>;

export { Filled, Flat, Outlined };
