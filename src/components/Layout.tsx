import { Outlet } from 'react-router-dom'
import Header from './Header'
import Rugal from '/Rugal_Proibido_2003.mp4'

export default function Layout() {
  return (
    <>
      <Header/>
      <main className='p-6 bg-backgroundPurple/75 h-full text-white'>
        <Outlet/>
      </main>
      <video autoPlay loop muted playsInline src={Rugal} id='video'/>
    </>
  )
}