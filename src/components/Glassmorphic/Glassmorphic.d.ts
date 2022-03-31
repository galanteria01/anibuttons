import React from "react"

export interface GlassmorphicProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  textAlign?: 'left' | 'center' | 'right'
  size?: 'small' | 'medium' | 'large'
  className?: string
  outlineColor?: string
  outlineRadius?: number
  style?: any
}