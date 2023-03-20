import { Tab } from '@headlessui/react'
import { AccordionEdgecore } from '../components/MainPage-components/AccordionEC/AccordionEdge-core'
import { AccordionSwitch } from '../components/MainPage-components/AccordionSwitch/AccordionSwitch'
import { AccordionTables } from '../components/MainPage-components/AccordionTables'


function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export const  MainPage = () =>  {

  return (
    <div className="w-full mx-auto max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-sky-500 p-1">
            {/* Edge-core tab */}
          
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Edge-core
            </Tab>
            
              {/* Aggregation tab */}           
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Агрегація
            </Tab>
              {/* Tables tab */}
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Таблиці
            </Tab>
          
        </Tab.List>
        <Tab.Panels className="mt-2">   
               {/* Edge-core tab panel*/}
            <Tab.Panel            
                 className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >             
                <AccordionEdgecore/>
            </Tab.Panel>

            {/* Aggregation tab-panle */}
            <Tab.Panel            
                 className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >             
                <AccordionSwitch/>
            </Tab.Panel>

            {/* Table tab-panle */}
            <Tab.Panel            
                 className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >             
                <AccordionTables/>
            </Tab.Panel>

        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
