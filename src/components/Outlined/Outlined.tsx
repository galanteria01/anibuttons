import React from 'react'
import styled from 'styled-components'
import { OutlinedProps } from './OutlinedProps'

const OutlinedButton = styled.button<OutlinedProps>`
  cursor: pointer;
  background: transparent;
  border-width: 1px;
  border-radius: ${props => props.size === 'small' ? '0.2rem' : props.size === 'medium' ? '0.4rem' : '0.6rem'};
  font-size: ${props => props.size === 'small' ? '0.8rem' : props.size === 'medium' ? '1rem' : '1.2rem'};
  color: ${props => props.color || '#fff'};
  border-color: ${props => props.borderColor || '#A020F0'};
  color: ${props => props.color || '#A020F0'};
  padding: ${props => props.size === "small" ? "7px 25px 8px" : (props.size === "medium" ? "9px 30px 11px" : "14px 30px 16px")};
  &:hover {
    background-color: ${props => props.hoverColor || "#A020F0"};
    color: ${props => props.hoverColor || "#FFF"};
  }
  &.active {
    background-color: ${props => props.activeColor || "#A020F0"};
  }
  &:disabled {
    background-color: ${props => props.disabledColor || "#A020F0"};
  }
`

const Outlined: React.FunctionComponent<OutlinedProps> = ({ children, onClick, className, disabled, ...props }: OutlinedProps) => {
  return (
    <OutlinedButton
      disabled={disabled}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </OutlinedButton>
  )
}

export default Outlined