import { useRouteError } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import mobile_bg from '/mobile_bg.png'
import mika from '/mika_404.png'
import { Suspense, lazy } from 'react'
import MobileHeader from '../components/MobileHeader'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

export default function ErrorPage() {
  type ErrorType = {
    status: string,
    statusText: string,
    error: {
      message: string
    }
  }
  const Video = lazy(() => import('../components/Video'))
  const error = useRouteError() as ErrorType;
  console.error(error instanceof Error);

  return (
      <div className="max-[723px]:bg-[url('/mobile_bg.png')] bg-cover">
        <main className='grow bg-backgroundPurple/75 h-[100%] min-h-screen text-white'>
          {window.innerWidth >= 723 ? <Header/> : <MobileHeader/>}
          <div className="flex flex-col p-6 max-[723px]:items-center">
            <h1 className="text-4xl font-lemonmilk uppercase">ERRO - {error.status}</h1>
            <h2 className="text-3xl font-lemonmilk uppercase">{error.statusText}</h2>
            <Separator className='border-1 min-[723px]:w-[682px]'/>
            <div className='mt-2 flex flex-col max-[723px]:items-center'>
              <p className='ml-4 text-lg'>Acabou de acontecer um erro</p>
              <p className='ml-4 text-lg'>{error.error.message}</p>
              <img src={mika} alt='Mika segurando o Hyde 404' 
              className={cn("aspect-square m-0", window.innerWidth >= 723 ? "size-1/3" : "")}/>
              <p className="ml-4 text-lg">Art by: <a className='underline' href="http://twitter.com/veter0">@veter0</a>, Source: <a href="https://twitter.com/veter0/status/1171534802253598722" className="underline">here</a> </p>
              </div>
          </div>
          <Suspense fallback={<img src={mobile_bg} id='bgMobile'></img>}>
            {window.innerWidth >= 723 ? <Video/> : <img src={mobile_bg} id='bgMobile'/> }
          </Suspense>
        </main>
        <Footer/>
      </div>
  );
}