import { AggrNavItem } from "./AggrNavItem"
import { ECNavItem } from "./ECNavItem"
import { FAQNavItem } from "./FAQNavItem"
import { TableNavItem } from "./TableNavItem"

export const Navbar = () => {
  return (
    <nav className="  sm:w-full xl:w-3/5 h-14 flex  items-center xl:justify-center sm:justify-between sm:gap-2 xl:gap-20 sm:mx-0 xl:mx-auto rounded-b-md  sm:bg-transparent ">
     <ECNavItem/>
     <AggrNavItem/>
     <TableNavItem/>
     <FAQNavItem/>
    </nav>
  )
}
