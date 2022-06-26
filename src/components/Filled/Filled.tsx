import React from 'react'
import FilledStyles from './Filled.module.css'
import { FilledProps } from './FilledProps'


const Filled: React.FunctionComponent<FilledProps> = (props: FilledProps) => {
  let classes = [FilledStyles['ani-filled']]
  if (props.size) {
    classes.push(FilledStyles[`ani-filled-${props.size}`])
  }
  return (
    <button
      disabled={props.disabled}
      className={classes.join(' ')}
      style={{
        textAlign: props.textAlign,
        fontSize: props.size === 'small' ? '0.8rem' : props.size === 'medium' ? '1rem' : '1.2rem',
        color: props.color,
        backgroundColor: props.backgroundColor,
        ...props.style
      }}
    >
      {props.children}
    </button>
  )
}

export default Filled