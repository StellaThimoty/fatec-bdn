import TextSpacer from '@/components/TextSpacer'
import bdn from '/bdn-svg.svg'
import unibr from '/unibr.png'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center text-center'>
        <img src={bdn} alt="Logo Barões da Noite" className='my-8 size-3/4'/>
        <div className="uppercase font-lemonmilk text-xs text-bold whitespace-pre-wrap select-none">
        The shadowed souls, the path of destiny they traverse. What they desires, only the moonlight whispers. The battle begins under the stars, a clash like no other.Seeking for the worthy adversaries, they duels.<br/>
        They strikes with fury, but victory alone is insufficient. The arena, limitless, no escape. Courage is reborn in this twilight. Fear is an illusion in this realm.
        </div>
      </div>
      <div className="flex max-[980px]:flex-col min-[980px]:justify-between text-lg mt-4">
        <div className='ml-4 min-[723px]:w-[682px] whitespace-pre-line'>
          <h1 className="text-4xl font-lemonmilk">TIMELINE</h1>
          <Separator className='border-1'/>
          <div className='leading-loose'>
            <TextSpacer text1="Fechamento dos invites" text2="30/09"/>
            <TextSpacer text1="Open Qualifier" text2="5/10"/>
            <TextSpacer text1="Semana 1" text2="11/10 - 13/10"/>
            <TextSpacer text1="Semana 2" text2="18/10 - 20/10"/>
            <TextSpacer text1="Semana 3" text2="25/10 - 27/10"/>
            <TextSpacer text1="Semana 4" text2="1/11 - 3/11"/>
          </div>
        </div>
        <div className='ml-4 min-[980px]:mx-8 min-[723px]:w-[682px] text-lg max-[980px]:mt-4'>
          <div className='whitespace-pre-line'>
            <h1 className="text-4xl font-lemonmilk">O QUE É</h1>
            <Separator className='border-1'/>
            <p className="ml-2">A Liga Barões da Noite é um campeonato de pontos corridos onde encontraremos o jogador mais consistente de UNDER NIGHT IN-BIRH II Sys:Celes!</p>
          </div>
          <div className='mt-4'>
            <h1 className="text-4xl font-lemonmilk max-[980px]:mt-4">OFERECIMENTO</h1>
            <Separator className='border-1'/>
            <div className='flex justify-center items-center max-[540px]:ml-4 mt-2'>
              <img src={unibr} alt="Logo uni Brasil" className='size-1/2 mt-2'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
