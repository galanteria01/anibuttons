import React from "react"

export interface FilledProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  textAlign?: 'left' | 'center' | 'right'
  size?: 'small' | 'medium' | 'large'
  className?: string
  backgroundColor?: any;
  color: any;
  style?: any
}