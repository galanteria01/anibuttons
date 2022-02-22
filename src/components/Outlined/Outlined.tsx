import React from 'react'
import OutlinedStyles from './Outlined.module.css'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
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

const Outlined: React.FunctionComponent<Props> = (props: Props) => {
  let classes = [OutlinedStyles['ani-outlined']]
  return (
    <button
      disabled={props.disabled}
      className={classes.join(' ')}
      style={{
        textAlign: props.textAlign,
        fontSize: props.size === 'small' ? '0.8rem' : props.size === 'medium' ? '1rem' : '1.2rem',
        outlineColor: props.outlineColor,
        ...props.style
      }}
    >
      {props.children}
    </button>
  )
}

export default Outlined