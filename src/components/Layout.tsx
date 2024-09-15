import { Outlet } from 'react-router-dom'
import Header from './Header'
import Rugal from '/Rugal_Proibido_2003.mp4'

export default function Layout() {
  return (
    <>
      <Header/>
      <main className='p-6 bg-red-500/75 h-screen'>
        <Outlet/>
      </main>
      <video autoPlay loop muted playsInline src={Rugal} className='bg-red-500' id='video'/>
    </>
  )
}