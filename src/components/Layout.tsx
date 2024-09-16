import { Outlet } from 'react-router-dom'
import Header from './Header'
import Rugal from '/Rugal_Proibido_2003.mp4'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <main className='grow bg-backgroundPurple/75 h-[100%] min-h-screen text-white'>
        <Header/>
        <div className="p-6">
          <Outlet/>
        </div>
      </main>
      <Footer/>
      <video autoPlay loop muted playsInline src={Rugal} id='video'/>
    </>
  )
}