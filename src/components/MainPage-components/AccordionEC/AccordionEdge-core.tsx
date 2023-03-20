import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { ECAddVlan } from './ECAddVlan'
import { ECClosePort } from './ECClosePort'
import { ECOpenPort } from './ECOpenPort'
import { ECReboot } from './ECReboot'

export const AccordionEdgecore = () => {
  return (
    <div className="w-full px-4 bg-white">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white  p-2">
        <Disclosure >
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-sky-200 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-sky-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Ребут комутатора</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-slate-700">
                <ECReboot/>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
   


        <Disclosure as="div" className="mt-2">
          {({ open }) => (

            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-sky-200 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-sky-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Закрити порт флудера</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-slate-700">
              <ECClosePort/>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2 ">
          {({ open }) => (

            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-sky-200 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-sky-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Вікдрити порт флудера</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-slate-700">
                <ECOpenPort/>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (

            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-sky-200 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-sky-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Віддати гіговий порт під абона</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-slate-700">
                <ECAddVlan/>
              </Disclosure.Panel>
            </>
            
            

          )}
        </Disclosure>

      </div>
    </div>
  )
}
