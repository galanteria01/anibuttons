import React from 'react'
import styled from 'styled-components'
import FilledProps from './FilledProps'

const FilledButton = styled.button<FilledProps>`
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  font-size: ${props => props.size === 'small' ? '0.8rem' : props.size === 'medium' ? '1rem' : '1.2rem'};
  color: ${props => props.color || '#fff'};
  background-color: ${props => props.backgroundColor || '#A020F0'};
  padding: ${props => props.size === "small" ? "7px 25px 8px" : (props.size === "medium" ? "9px 30px 11px" : "14px 30px 16px")};
  &:hover {
    background-color: ${props => props.hoverColor || "#A020F0"};
  }
  &.active {
    background-color: ${props => props.activeColor || "#A020F0"};
  }
  &:disabled {
    background-color: ${props => props.disabledColor || "#A020F0"};
  }
`
const Filled: React.FunctionComponent<FilledProps> = ({ className, onClick, children, disabled, ...props }: FilledProps) => {
  return (
    <FilledButton
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </FilledButton>
  )
}

export default Filled