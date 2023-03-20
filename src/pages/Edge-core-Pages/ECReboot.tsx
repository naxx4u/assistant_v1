import {useEffect, useState} from 'react'
import axios from 'axios'
import { IpInput } from '../../components/EdgeCore-components/IpInput'
import { ErrorMsg } from '../../components/EdgeCore-components/ErrorMsg'
import { SubmitBtn } from '../../components/EdgeCore-components/SubmitBtn'
import { SwitchOnline } from '../../Types/TableTypes'


export const ECReboot = () => {
  //btn-title
  const title = 'Reboot'
  //states
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState([])
  //search-const
  const searchItem:any = search.filter((item:SwitchOnline) =>  {
    return (item.address && item.ip).toLocaleLowerCase().includes(value.toLocaleLowerCase())
  })
  //edge-core filter
  const noIp =  searchItem.filter((item:SwitchOnline) => {return item?.ip === value.trim() }) 
  //пуста функція, щоб не виникало помилок в консолі через відсутність порта на данні сторінці
  const setPortError = () => {}
  //submit func
  const submitHandler = () => {
    axios.post('http://192.168.2.182:8090/api/task/', {      
      ip: value,
      port: 0,
      vlan: 0,
      task: 'reboot',})
      .then(res => setResponse(res.data === 'ONLINE - REBOOT' ? `Перезавантаження! Очікуйте 1-2хвилини...` : res.data))
      .catch(err =>  err.response.status > 200 ? setError('Будь уважнішим... десь є помилка!') : '')
      setValue('')
      setLoading(true) 
      setSearch([])
      setResponse('')   
      setError('') 
  }
  //useEffect для відображення лоадера на кнопці
    useEffect(() => {   
      setError('')  
      response !== '' && setLoading(false)
      error !== '' && setLoading(false)
    },[response, error]) 
  //useEffect edge-core fetch
    useEffect(() => {
      axios.get('http://192.168.2.182:8090/api/swedgecore/')
      .then(res => setSearch(res.data))
    },[])

    //useEffect для валідації наявності edge-core в списку
    useEffect(() => {
      (value.length >0 && !noIp[0]?.ip ) ? setError('Такого комутатора немає... або це вузол і немає прав')  : setError('')
      },[searchItem, value, noIp])

  return (
    <div className='flex flex-col items-center justify-center mt-16 '>
        <h1 className='text-3xl  font-bold text-center text-slate-700 mb-8'>Перезавантажити Edge-core</h1>
        <IpInput value={value} setValue={setValue} setResponse={setResponse} setError={setError} setPortError={setPortError}/>
        <ErrorMsg value={value} error={error} response={response} searchItem={searchItem} />
        <SubmitBtn value={value} searchItem={searchItem} submitHandler={submitHandler} title={title} loading={loading} />      
    </div>
  )
}
