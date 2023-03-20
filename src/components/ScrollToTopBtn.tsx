import {FaArrowAltCircleUp}  from 'react-icons/fa'


export const ScrollToTopBtn = () => {
    const goToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
  return (
  
    <div className='fixed bottom-10 right-10'>
        <button 
        className='text-4xl text-sky-600 animate-bounce'
        onClick={goToTop}
        >
            <FaArrowAltCircleUp/>
        </button>
    </div>
  
  )
}
