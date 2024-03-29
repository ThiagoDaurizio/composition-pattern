import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const ModalTitle = ({
  children
}: IProps) => {

  return (
    <p className='font-semibold text-lg text-emerald-500'>{children}</p>
  )
}

export default ModalTitle
