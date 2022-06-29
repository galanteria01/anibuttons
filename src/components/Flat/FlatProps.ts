import React from "react";

export default interface FlatProps extends React.HTMLAttributes<HTMLButtonElement> {
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