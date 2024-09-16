import { Outlet } from 'react-router-dom'
import Header from './Header'
import Rugal from '/Rugal_Proibido_2003.mp4'
import FS from '/fero_shueider.mp4'
import JA from '/jaca_axuul.mp4'
import KG from '/klasfer_guizin.mp4'
import Footer from './Footer'

const vidLink = (): string => {
  const num = Math.floor(Math.random() * (100)) + 1
  if (num >= 1 && num < 33) {
    return FS
  } else if (num >= 33 && num < 66) {
    return JA
  } else if (num >= 66 && num < 100) {
    return KG
  } else if (num == 100) {
    return Rugal
  }

  return ''
}


export default function Layout() {
  const video = vidLink()

  return (
    <>
      <main className='grow bg-backgroundPurple/75 h-[100%] min-h-screen text-white'>
        <Header/>
        <div className="p-6">
          <Outlet/>
        </div>
      </main>
      <Footer/>
      <video autoPlay loop muted playsInline src={video} id='video'/>
    </>
  )
}