import Navbar from "../components/headers/Navbar"
import ScrollingText from "../components/headers/ScrollingText"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar/>
        <ScrollingText/>
      </div>
      <Outlet/>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MainLayout
