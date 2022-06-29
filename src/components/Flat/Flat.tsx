import React from 'react';
import styled from 'styled-components';
import FlatProps from './FlatProps';

const FlatButton = styled.button<FlatProps>`
  border: none;
  border-radius: 0.2rem;
  background-color: transparent;
  cursor: pointer;
  font-size: ${props => props.size === 'small' ? '0.8rem' : props.size === 'medium' ? '1rem' : '1.2rem'};
  color: ${props => props.color || '#A020F0'};
  padding: ${props => props.size === "small" ? "7px 25px 8px" : (props.size === "medium" ? "9px 30px 11px" : "14px 30px 16px")};
  &:hover {
    color: ${props => props.hoverColor || "#A020F0"};
  }
  &.active {
    color: ${props => props.activeColor || "#A020F0"};
  }
  &:disabled {
    color: ${props => props.disabledColor || "#A020F0"};
  }
`;

const Flat: React.FunctionComponent<FlatProps> = ({ children, className, onClick, disabled, ...props }: FlatProps) => {
  return (
    <FlatButton
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </FlatButton>
  )
}

export default Flat;