import React from 'react'
import loader from './loader.gif'

export const Loader = () => {
  return (
    <>
        <img src={loader} alt='Loader' className='h-72 w-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
    </>
  )
}
