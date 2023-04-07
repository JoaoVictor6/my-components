import React, { ReactNode } from 'react'

export enum TextSize {
  SMALL = '0.8em',
  BASE = '1em',
  LARGE = '1.25em',
  EXTRA_LARGE = '1.563',
  SUPER = '1.953em',
  MEGA = '2.441em'
}

type Props = {
  size: keyof typeof TextSize
  children: ReactNode
}

export default function Text(props: Props) {
  return (
    <p
      style={{
        fontSize: TextSize[props.size]
      }}
    >
      {props.children}
    </p>
  )
}
