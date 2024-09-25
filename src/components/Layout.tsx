import { Navigate, Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import gif from '/suspense.gif'
import { Suspense, lazy } from 'react'
import MobileHeader from './MobileHeader'

export default function Layout() {
  const Video = lazy(() => import('./Video'))
  Navigate({to: '/home'})

  return (
    <div className="max-[723px]:bg-[url('/suspense.gif')] bg-cover">
      <main className='grow bg-backgroundPurple/75 h-[100%] min-h-screen text-white'>
        {window.innerWidth >= 723 ? <Header/> : <MobileHeader/>}
        <div className="p-6">
          <Outlet/>
        </div>
        <Suspense fallback={<img src={gif} id='bgVideo'></img>}>
          {window.innerWidth >= 723 ? <Video/> : <img src={gif} id='bgVideo'></img> }
        </Suspense>
      </main>
      <Footer/>
    </div>
  )
}