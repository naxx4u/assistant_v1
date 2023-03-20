import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Link } from "react-router-dom"

export const AggrNavItem = () => {
  return (
    <>
       <Menu as="div" className="relative inline-block text-left z-10">
        <div>
          <Menu.Button  className='inline-flex w-full items-center justify-center rounded-md bg-sky-500 sm:px-2 xl:px-4 sm:py-1 xl:py-2 text-sm  font-medium text-white hover:bg-blue-500 active:bg-blue-800 active:shadow-xl  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            Агрегація
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute  xl:-left-1/2 sm:left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
              <Link to={'swonline'}>
                  <button
                    className={`${
                      active ? "bg-sky-300 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                     Онлайн агрегація
                  </button>
              </Link>
                )}
              </Menu.Item>
              </div>
              <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-sky-300 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                   Може тут буде ще щось
                  </button>
                )}
              </Menu.Item>
              </div>
            
      
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-sky-300 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Може тут буде ще щось
                  </button>
                )}
              </Menu.Item>
            </div>

            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-sky-300 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Може тут буде ще щось
                  </button>
                )}
              </Menu.Item>
            </div>
         </div>
          </Menu.Items>
        </Transition>
      </Menu></>
  )
}
