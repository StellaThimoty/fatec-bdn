import bdn from '/Liga_Baroes_da_Noite_Logo.png'
import unibr from '/unibr.png'

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center text-center'>
        <img src={bdn} alt="Logo Barões da Noite" className='size-1/2'/>
        <div className="uppercase font-lemonmilk text-xs text-bold whitespace-pre-wrap">
        The shadowed souls, the path of destiny they traverse. What they desires, only the moonlight whispers. The battle begins under the stars, a clash like no other.Seeking for the worthy adversaries, they duels.<br/>
        They strikes with fury, but victory alone is insufficient. The arena, limitless, no escape. Courage is reborn in this twilight. Fear is an illusion in this realm.
        </div>
      </div>
      <div className="flex max-[980px]:flex-col min-[980px]:justify-between text-base mt-4">
        <div className='ml-4 w-[682px] whitespace-pre-line'>
          <h1 className="text-4xl font-lemonmilk">TIMELINE</h1>
          <hr className='border-1'/>
          <div className='leading-loose'>
          Fechamento dos invites .................... 31 de setembro <br/>
          Open Qualifier ......................................... 5 de outubro <br/>
          Semana 1 ..................... 11 de Outubro - 13 de outubro <br/>
          Semana 2 ................. 18 de Outubro - 20 de outubro <br/>
          Semana 3 ................. 25 de Outubro - 27 de outubro <br/>
          Semana 4 ................ 1 de Novembro - 3 de Novembro
          </div>
        </div>
        <div className='ml-4 min-[980px]:mx-8 w-[682px] text-base max-[980px]:mt-4'>
          <div className='whitespace-pre-line'>
            <h1 className="text-4xl font-lemonmilk">O QUE É</h1>
            <hr className='border-1'/>
            A Liga Barões da Noite é um campeonato de pontos corridos onde encontraremos o jogador mais consistente de UNDER NIGHT IN-BIRH II Sys:Celes!
          </div>
          <div className='mt-4'>
            <h1 className="text-4xl font-lemonmilk max-[980px]:mt-4">OFERECIMENTO</h1>
            <hr className='border-1'/>
            <div className='flex min-[540px]:justify-center min-[540px]:items-center max-[540px]:ml-4'>
              <img src={unibr} alt="Logo uni Brasil" className='size-1/2 mt-2'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
