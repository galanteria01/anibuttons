import React from "react"

export interface OutlinedProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  textAlign?: 'left' | 'center' | 'right'
  size?: 'small' | 'medium' | 'large'
  className?: string
  borderColor?: string
  borderRadius?: number
  color?: string
  hoverColor?: string;
  activeColor?: string;
  disabledColor?: string;
}