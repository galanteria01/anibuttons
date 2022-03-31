import React from 'react'
import OutlinedStyles from './Outlined.module.css'
import { OutlinedProps } from './OutlinedProps'


const Outlined: React.FunctionComponent<OutlinedProps> = (props: OutlinedProps) => {
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