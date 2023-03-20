import { Navbar } from "./Navbar/Navbar"

interface LayoutProps {
    children: JSX.Element
}

export const Layout = ({children}:LayoutProps) => {
  return (
    <div className="container mx-auto">
        {/* <Navbar/> */}
        <Navbar/>
        {children}
    </div>
  )
}
