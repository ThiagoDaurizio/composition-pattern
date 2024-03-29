'use client'
import React, { ReactNode } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface IProps {
  children: ReactNode
  onClose?: () => void
  backdropClose?: boolean
}

const ModalRoot = ({
  children, 
  onClose, 
  backdropClose = false
}: IProps) => {

  const backdropClick = (event: any) => {
    if(event.target.id === 'backdrop' && backdropClose && onClose){
      onClose()
    }
  }


  return (
    <div onClick={backdropClick} id={'backdrop'} className='min-h-screen w-screen bg-slate-800/70 absolute top-0 left-0 z-40'>
      <div className='select-none w-[360px] bg-slate-500 rounded-md overflow-hidden drop-shadow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        {children}
        {onClose && (
          <button className='absolute top-2 right-2' onClick={onClose}>
            <AiOutlineClose/>
          </button>
        )}
      </div>
    </div>
  )
}

export default ModalRoot
