import {RiLoader2Fill} from 'react-icons/ri'
import { SwitchOnline } from '../../Types/TableTypes'

export const SubmitBtn = ({value, submitHandler, title, port, vlan, loading, searchItem}:any) => {
  
  const noIp =  searchItem.filter((item:SwitchOnline) => {return item?.ip === value })
  
  const notVlaid = ((value?.length <= 7  || value.match('[A-Za-zА-Яа-яЁё]')) 
                  || (port?.length < 1 || port?.match('[A-Za-zА-Яа-яЁё]')) 
                  || (vlan?.length <= 3 || vlan?.match('[A-Za-zА-Яа-яЁё]')) 
                  || (!noIp[0]?.ip)
   ) && true


  
  return (
    <>
     <button className={` flex items-center justify-center w-28 h-10 ${notVlaid ? "bg-gray-400 cursor-not-allowed" : 'bg-sky-500 active:bg-sky-800 cursor-pointer  active:shadow-2xl active:shadow-slate-900  active:border-2-sky-900 hover:scale-105'} rounded-md shadow-sm   shadow-neutral-900 text-sm  text-white/80 text-center`}
        disabled={notVlaid}
        onClick={submitHandler}
        >
          { loading ?
           <span className='text-2xl text-sky-600 animate-spin'><RiLoader2Fill/></span>
           : title}
        </button>
    </>
  )
}
