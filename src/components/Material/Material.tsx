import React from 'react'
import MaterialStyles from './Material.module.css'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  textAlign?: 'left' | 'center' | 'right'
  size?: 'small' | 'medium' | 'large'
  outlineRadius?: string
  className?: string
  textColor?: string
  color?: string
  style?: any
  type?: 'primary' | 'secondary'
}

const Material: React.FunctionComponent<Props> = (props: Props) => {
  let classes = [MaterialStyles['ani-material']]
  if (props.type === 'primary') {
    classes.push(MaterialStyles['ani-material--primary'])
  } else if (props.type === 'secondary') {
    classes.push(MaterialStyles['ani-material--secondary'])
  }
  return (
    <button
      className={classes.join(' ')}
      style={{
        textAlign: props.textAlign,
        fontSize: props.size === 'small' ? '0.8rem' : props.size === 'medium' ? '1rem' : '1.2rem',
        color: props.textColor,
        // backgroundColor: props.color,
        borderRadius: props.outlineRadius,
        ...props.style
      }}
    >
      {props.children}
    </button>
  )
}

export default Material
