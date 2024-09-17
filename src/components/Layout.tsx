import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
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
        <Suspense fallback={<p>No video</p>}>
          <Video/>
        </Suspense>
      </main>
      <Footer/>
    </>
  )
}