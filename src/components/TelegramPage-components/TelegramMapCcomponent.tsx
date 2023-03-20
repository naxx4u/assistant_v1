import { memo } from 'react'
import { BsTelegram } from 'react-icons/bs'




export const TelegramMapCcomponent = memo(function TelegramMapCcomponent({contact}:any){

  return (
    <>
     <tr key={contact.id} className="border-2 border-slate-700 hover:bg-sky-300 duration-100 font-semibold">
        <td className="border px-3 pt-1 border-slate-700">
          <button className="text-sky-500" ><BsTelegram/></button>
        </td>
        <td className="border  border-slate-700 xl:text-base sm:text-xs" >+{contact.phone}</td>
        <td className="sm:hidden xl:table-cell border border-slate-700 text-center xl:text-base sm:text-xs">{contact.cid}</td>
        <td className="sm:hidden xl:table-cell border border-slate-700 text-center xl:text-base sm:text-xs">{contact.own}</td>
        <td className="border border-slate-700 text-center xl:text-base sm:text-xs">{contact.username}</td>
        <td className="border border-slate-700 text-center xl:text-base sm:text-xs">{contact.fio}</td>
    </tr>
    </>
  )
})
