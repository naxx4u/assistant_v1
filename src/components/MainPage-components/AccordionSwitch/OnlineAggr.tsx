import { BsFillExclamationCircleFill } from "react-icons/bs"
import { FiRefreshCcw } from "react-icons/fi"
import { HiCheckCircle } from "react-icons/hi"
import { aggrDesctription } from "../description" 


export const OnlineAggr = () => {
  return (
    <div className='my-2 flex flex-row flex-wrap  items-center justify-between  '>
        <span className=' flex items-center  text-red-600  text-center '>
             <BsFillExclamationCircleFill />
             <span className='text-sm px-2'> - не працює</span>
        </span>
       
       <span className='flex items-center  text-green-500 text-center text-lg'>
            <HiCheckCircle />
        <span className='text-sm px-2'> - працює</span>
        </span>    
        <button
          type="button"
          className="flex gap-2 px-2 py-1 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          <span className="text-xs"> Оновити </span>
          <span className="text-sm ">
            <FiRefreshCcw />
          </span>
        </button>
    <p className="text-sm font-semibold text-slate-500 mt-2">{aggrDesctription}</p>
    </div>

  )
}
