
export const PortInput = ({port, setPort}:any) => {
  return (
    <>
        <label  className='flex flex-col gap-2 text-center text-slate-600 my-3 '>
          <span className="text-sm text-slate-600  font-semibold">Порт</span>
        <input className='h-10 w-40 rounded-md bg-sky-300/50  text-center text-xl  placeholder:text-lg placeholder:uppercase placeholder:text-slate-400  focus:border-2 focus:border-sky-400 focus:bg-sky-300/30   focus:ring-0 focus:ring-offset-0 focus:outline-none focus:outline-offset-0'
        onChange={(e) => setPort(e.target.value)}
        value={port}
        placeholder='enter port 1-24'   
        minLength={1}
        maxLength={2}        
        type="text"
         />
        </label>
    
    </>
  )
}
