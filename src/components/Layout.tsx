import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import gif from '/suspense.gif'
import { Suspense, lazy } from 'react'
import MobileHeader from './MobileHeader'

const w = window.innerWidth

export default function Layout() {
  const Video = lazy(() => import('./Video'))
  return (
    <div className="max-[723px]:bg-[url('/suspense.gif')] bg-cover">
      <main className='grow bg-backgroundPurple/75 h-[100%] min-h-screen text-white'>
        {w >= 723 ? <Header/> : <MobileHeader/>}
        <div className="p-6">
          <Outlet/>
        </div>
        <Suspense fallback={<img src={gif}></img>}>
          {w >= 723 ? <Video/> : '' }
        </Suspense>
      </main>
      <Footer/>
    </div>
  )
}