export const IpInput = ({value, setValue, setPortError, setError, setResponse}: any) => {
  const inputClick = () => {
    setPortError('')
    setError('')
    setResponse('')
  }
  return (
    <>
        <label  className='flex flex-col  text-center text-slate-600 '>
          <span className="text-sm text-slate-600  font-semibold">ІP комутатора</span>
        <input className='h-10 rounded-md bg-sky-300/50  text-center text-xl   placeholder:text-lg placeholder:uppercase placeholder:text-slate-400  focus:border-2 focus:border-sky-400 focus:bg-sky-300/30   focus:ring-0 focus:ring-offset-0 focus:outline-none focus:outline-offset-0'
        onChange={(e) => setValue(e.target.value)}
        onClick={inputClick}
        value={value}
        placeholder='enter ip-adress...'   
        minLength={10}
        maxLength={13}
        type="search" 
         />
        </label>
    </>
  )
}
