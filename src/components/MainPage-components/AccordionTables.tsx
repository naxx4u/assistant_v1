import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export const AccordionTables = () => {
  return (
    <div className="w-full px-4 bg-white">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white  p-2">
        <Disclosure >
          {({ open}) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-sky-200 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-sky-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Тут може щось буде</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-slate-700">
                Тут буде короткий опис
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
   


        <Disclosure as="div" className="mt-2">
          {({ open }) => (

            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-sky-200 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-sky-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Тут може ще щось буде</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-slate-700">
              Тут буде короткий опис
              </Disclosure.Panel>
            </>
            
            

          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2 ">
          {({ open }) => (

            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-sky-200 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-sky-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Тут може ще щось буде</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-slate-700">
              Тут буде короткий опис
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
