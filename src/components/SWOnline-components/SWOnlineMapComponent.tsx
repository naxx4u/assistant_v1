import { BsFillExclamationCircleFill } from 'react-icons/bs'
import { HiCheckCircle } from 'react-icons/hi'
import { memo } from 'react'


export const SWOnlineMapComponent =  memo(function SWOnlineMapComponent({aggr}:any){
  return (
    <>
        <tr className=' hover:bg-sky-300 duration-100'>
                <td className="border border-slate-700 py-1 px-4">
                    {aggr.active  === 0 ?
                    <span className='text-red-600  text-center animate-ping'> <BsFillExclamationCircleFill/></span>
                    : <span className='text-green-500 text-base'><HiCheckCircle/></span>}
                </td>
                <td className="border border-slate-700 sm:p-0 xl:p-1 xl:text-base sm:text-xs">
                    {aggr.address}
                </td>
                <td className="border border-slate-700 sm:p-0 xl:p-1 xl:text-base sm:text-xs">
                    <a href={`http://snmp.x-city.ua/sw_snmp_v2.php?ip=${aggr.ip}`} rel="noreferrer" target='_blank'
                    className='text-sky-500 underline underline-offset-1'>
                      {aggr.ip}
                    </a>
                </td>
                <td className="border border-slate-700 sm:p-0 xl:p-1 xl:text-base sm:text-xs">
                    {aggr.city}
                </td>
                <td className="border border-slate-700 sm:p-0 xl:p-1 xl:text-base sm:text-xs">
                    {aggr.model}
                </td>
              
              </tr>
    </>
  )
})
