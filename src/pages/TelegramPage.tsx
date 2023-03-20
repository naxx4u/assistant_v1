import axios from "axios"
import {useState, useEffect} from 'react'
import { TelegramMapCcomponent } from "../components/TelegramPage-components/TelegramMapCcomponent"
import { Search } from "../components/Search"
import { TelegramTable } from "../Types/TableTypes"
import { TelegramTableHead } from "../components/TelegramPage-components/TelegramTableHead"
import { ScrollToTopBtn } from "../components/ScrollToTopBtn"


export const TelegramPage = () => {

  const [telegram, setTelegram] = useState<TelegramTable[]>([])
  const [searchValue, setSearchValue] = useState('')
  const searchResult = telegram.filter((item:TelegramTable) => {
    return (item.phone + item.fio + item.username).toLowerCase().includes(searchValue.toLowerCase()) 
  })

  const [showTopButton, setShowTopButton ] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
     window.scrollY > 180 ? setShowTopButton(true) :  setShowTopButton(false)  
    })
}) 


  useEffect(() => {
    axios.get('http://192.168.2.182:8090/api/telegramusers/')
    .then(res => setTelegram(res.data))
  }, [])
  useEffect(() => {
    setSearchValue('')
  }, [])
  
  return (
    <>
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="font-bold text-2xl text-slate-700 pb-6">Користувачі Telegram</h1>

      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>

        <table className="table-auto border-collapse border-2 border-slate-700 shadow-2xl">
      <TelegramTableHead/>
  <tbody className="bg-slate-50">
    {
     searchResult.map((contact:TelegramTable, index:number) => <TelegramMapCcomponent contact={contact}  key={index}/> )
     }
   
  </tbody>
</table>
    </div>
    {showTopButton && <ScrollToTopBtn/>}
    </>
  )
}
