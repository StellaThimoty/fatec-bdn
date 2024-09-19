import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import gif from '/suspense.gif'
import { Suspense, lazy } from 'react'


export default function Layout() {
  const Video = lazy(() => import('./Video'))
  return (
    <>
      <main className='grow bg-backgroundPurple/75 h-[100%] min-h-screen text-white'>
        <Header/>
        <div className="p-6">
          <Outlet/>
        </div>
        <Suspense fallback={<img src={gif} width={1920} height={1080}></img>}>
          <Video/>
        </Suspense>
      </main>
      <Footer/>
    </>
  )
}