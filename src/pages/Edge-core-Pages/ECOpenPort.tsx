import {useEffect, useState} from 'react'
import axios from 'axios'
import { IpInput } from '../../components/EdgeCore-components/IpInput'
import { ErrorMsg } from '../../components/EdgeCore-components/ErrorMsg'
import { SubmitBtn } from '../../components/EdgeCore-components/SubmitBtn'
import { PortInput } from '../../components/EdgeCore-components/PortInput'
import { SwitchOnline } from '../../Types/TableTypes'

export const ECOpenPort = () => {
   //btn-title
    const title = 'Відкрити порт'
    //states
    const [value, setValue] = useState('')
    const [port, setPort] = useState('')
    const [response, setResponse] = useState('')
    const [error, setError] = useState('')
    const [portError, setPortError] = useState('')
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState([])
    //search-const
    const searchItem:any = search.filter((item:SwitchOnline) =>  {
      return (item.address && item.ip).toLocaleLowerCase().includes(value.toLocaleLowerCase())
    })
    //edge-core filter
    const noIp =  searchItem.filter((item:SwitchOnline) => {return item?.ip === value }) 

    //submit func
    const submitHandler = () => {
      axios.post('http://192.168.2.182:8090/api/task/', {      
        ip: value,
        port: port,
        vlan: 0,
        task: 'port_open'}
        )
        .then(res => setResponse((res.data === 'ONLINE - OPEN PORT' ? `Порт ${port} відкрито!` : 'Помилка...') ))
        .catch(err => err.response.status > 200  ? setPortError(err.response.data.port) : '')
        setValue('')
        setPort('')  
        setError('') 
        setLoading(true) 
        setResponse('')  
        setPortError('') 
             
    }
    //useEffect для відображення лоадера на кнопці
      useEffect(() => {     
        setPort('');
        setError('');
        response !== '' && setLoading(false);
        (error || portError) !== '' && setLoading(false)
      },[response, error, portError])  
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
          <h1 className='text-3xl  font-bold text-center text-slate-700 mb-8'>Відкрити порт</h1>
          <IpInput value={value} setValue={setValue} setPortError={setPortError}  setError={setError} setResponse={setResponse}/>
          <PortInput port={port} setPort={setPort}/>
          <ErrorMsg value={value} port={port}  response={response} error={error} searchItem={searchItem} portError={portError}/>
          <SubmitBtn value={value} searchItem={searchItem} submitHandler={submitHandler} title={title} port={port}  loading={loading}/>      
      </div>
    )
  }
  

