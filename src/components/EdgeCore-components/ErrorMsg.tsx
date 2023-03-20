import { SwitchOnline } from "../../Types/TableTypes";

export const ErrorMsg = ({value, port, vlan, error, response, searchItem, portError}:any) => {
 
  return (
    <div className='text-lg my-2  '>
        <div className="flex flex-col items-center justify-center text-sm font-semibold text-red-600">
           
            {(port?.match('[A-Za-zА-Яа-яЁёіІ]') 
            || value?.match('[A-Za-zА-Яа-яЁёіІ]') 
            || vlan?.match('[A-Za-zА-Яа-яЁёіІ]'))  ? 'Тільки числа..' : ''
            ||( (value?.length  > 0 || error.includes('не є коректним вибором')) && error)}

              {searchItem && portError}

           <span className="text-green-600 text-center"> {response}</span>          
         
          <div className="text-sky-600">

            {searchItem?.map((item:SwitchOnline) => value === item.ip ?(
              <span className="flex gap-2" key={item.model}>
                <p className="text-slate-800">Адреса:</p>
                <p>{item.address}</p>
              </span>):''
            )}
          </div>       
        </div>
    </div>
  )
}
