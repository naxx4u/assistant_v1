import { BsFillExclamationCircleFill } from "react-icons/bs"
import { FiRefreshCcw } from "react-icons/fi"
import { HiCheckCircle } from "react-icons/hi"

export const SWOnlineDescription = ({ refreshInfo, aggregation }: any) => {
  const newArr =  aggregation?.map((aggr: any ) => aggr.active)

  return (
    <div className="flex flex-col items-center justify-center">
     
      <div className="my-2 flex sm:gap-1 xl:gap-20 items-center ">
        <span className=" flex items-center  text-red-600  text-center">
          {}
          <BsFillExclamationCircleFill />{" "}
          <span className="text-sm px-2"> - не працює</span>
        </span>
        <span className="flex items-center px-2 text-green-500 text-xl">
          <HiCheckCircle />
          <span className="text-sm px-2"> - працює</span>
        </span>
        <button
          onClick={() => refreshInfo()}
          type="button"
          className="flex gap-2 px-2 py-1 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          <span className="text-xs"> Оновити </span>
          <span className="text-sm ">
            <FiRefreshCcw />
          </span>
        </button>
        
      </div>
      {

       <div className="font-bold">
        <span className="text-base text-slate-700">Не працюючих комутаторів - </span>
        <span className="text-red-600 text-base">{newArr.filter((aggr: any) => aggr === 0).length}</span>
        </div>
      }     
    </div>
  )
}
