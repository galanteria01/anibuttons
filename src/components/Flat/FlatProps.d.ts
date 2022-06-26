import React from "react"

export interface FlatProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  textAlign?: 'left' | 'center' | 'right'
  size?: 'small' | 'medium' | 'large'
  className?: string
  style?: any
  color?: any
  hoverColor?: any
  activeColor?: any
}