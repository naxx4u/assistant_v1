import { useEffect, useState } from "react"
import { HiOutlineSearchCircle } from "react-icons/hi"
import { MdOutlineClear } from "react-icons/md"



export const Search = ({searchValue, setSearchValue}:any) => {
    const [clearBtn, setClearBtn] = useState(false)
    const clearSearch = () => {
      setClearBtn(false)
      setSearchValue('')
    }
    useEffect(() => {
        setSearchValue('')
    },[setSearchValue])
  return (
    <div className='relative flex items-center gap-1' >
    <input className=' my-1.5 h-6 w-52 focus:w-56 ease-out duration-100 rounded-md border-2 border-sky-300 focus:border-sky-500 text-slate-700 text-center placeholder:text-center' 
     onClick={() => setClearBtn(true)}
     value={searchValue}
     onChange={e => setSearchValue(e.target.value)}
     placeholder='type something...'
     type="search" 
      />
      
  
      {clearBtn ?
      <button className=' text-blue-600 '
      onClick={clearSearch}>
       <MdOutlineClear/>
      </button>
      :
      <button className='cursor-default text-2xl bg-sky-50 rounded-full text-sky-400'>
      <HiOutlineSearchCircle/>
      </button>}
    </div>
  )
}
