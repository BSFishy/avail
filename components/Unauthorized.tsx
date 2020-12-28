import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Unauthorized = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  )
}

export default Unauthorized
