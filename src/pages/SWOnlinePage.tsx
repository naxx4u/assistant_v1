import { useState, useEffect } from 'react'
import axios from "axios"
import { SwitchOnline } from '../Types/TableTypes'
import { SWOnlineMapComponent } from '../components/SWOnline-components/SWOnlineMapComponent'
import { SWOnlineHead } from '../components/SWOnline-components/SWOnlineHead'
import { SWOnlineDescription } from '../components/SWOnline-components/SWOnlineDescription'
import { Loader } from '../components/Loader/Loader'
import { ScrollToTopBtn } from '../components/ScrollToTopBtn'
import { Search } from '../components/Search'




export const SWOnlinePage = () => {
  const [aggregation, setAggregation] = useState<SwitchOnline[]>([])
  const [searchValue, setSearchValue] = useState('')
  
  const searchResult = aggregation.filter((item:SwitchOnline) => {
    return (item.address || item.ip).toLowerCase().includes(searchValue.toLowerCase()) 
  })
  
  const refreshInfo = () => {
    window.location.reload()
    axios.get('http://192.168.2.182:8090/api/swonline/')
      .then(res => setAggregation(res.data))
  }


  const [showTopButton, setShowTopButton ] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
     window.scrollY > 180 ? setShowTopButton(true) :  setShowTopButton(false)  
    })
}, []) 

  useEffect(() => {
    axios.get('http://192.168.2.182:8090/api/swonline/')
      .then(res => setAggregation(res.data))
      const RefreshData = () => {
        setInterval( () => {
          axios.get('http://192.168.2.182:8090/api/swonline/')
          .then(res => setAggregation([...res.data]))
        },60000)
        
      }
      RefreshData()
  }, [])
  useEffect(() => {
    setSearchValue('')
  },[])

  return (
      <>
    <div className="flex flex-col items-center justify-center mt-10 mx-auto">
      <h1 className=' font-bold text-2xl text-slate-700'>Онлайн агрегація</h1>
      <SWOnlineDescription refreshInfo={refreshInfo} aggregation={aggregation} />

      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      { !aggregation?.length ? <Loader/> :
      <table className=" border-collapse border-2  border-slate-500 shadow-2xl  ">
        <SWOnlineHead />
        <tbody  className="bg-slate-50">
          {
            searchResult.map((aggr: SwitchOnline, index: number) => (
              <SWOnlineMapComponent aggr={aggr} key={index} />
            ))
          }
        </tbody>
      </table>}
    </div>
     {showTopButton && <ScrollToTopBtn/>}
     </>
  )
}
