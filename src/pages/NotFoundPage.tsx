import {GiSadCrab} from 'react-icons/gi'

export const NotFoundPage = () => {
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center animate-bounce  delay-1000 '>
      <span className='text-9xl text-slate-900 animate-pulse'><GiSadCrab/></span>
      <span className='text-7xl text-slate-900 animate-pulse'>Page Not Found!</span>
    </div>
  )
}
