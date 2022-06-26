import React from 'react'
import FlatStyles from './Flat.module.css'
import { FlatProps } from './FlatProps'

const Flat: React.FunctionComponent<FlatProps> = (props: FlatProps) => {
  let classes = [FlatStyles['ani-flat']]
  if (props.size) {
    classes.push(FlatStyles[`ani-flat-${props.size}`])
  }
  return (
    <button
      disabled={props.disabled}
      className={classes.join(' ')}
      style={{
        textAlign: props.textAlign,
        fontSize: props.size === 'small' ? '0.8rem' : props.size === 'medium' ? '1rem' : '1.2rem',
        color: props.color,
        ...props.style
      }}
    >
      {props.children}
    </button>
  )
}

export default Flat