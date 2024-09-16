import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Regulamento() {
  return (
    <div className="flex flex-row">
    <section className="mx-8 w-[682px]">
      <h1 className="text-4xl font-lemonmilk">LIGA BARÕES DA NOITE #1</h1>
      <hr className='border-t-2'/>
      <Accordion type="single" collapsible className="w-full px-3 text-base">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-lemonmilk uppercase">FASE 1</AccordionTrigger>
          <hr className='border-1'/>
          <AccordionContent className="pt-2 pl-3">
            <ul className="text-lg">
              <li>- 16 jogadores (12 classificam ranking baseado em resultados em torneios, outros 4 entrarão por um open qualifier)</li>
              <li>- Campeonato de pontos corridos (turno único)</li>
              <li>- Partidas são FT3</li>
              <li>- Top 8 se classifica para Fase 2</li>
              <li>- 9o até 16o eliminados do torneio</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl font-lemonmilk uppercase">FASE 2</AccordionTrigger>
            <hr className='border-1'/>
            <AccordionContent className="pt-2 pl-3">
            <ul className="text-lg">
              <li>- 2 grupos de 4 jogadores baseados na colocação do Top 8</li>
              <ul className="pl-4">
                <li>- Grupo 1: 1, 4, 5 e 8</li>
                <li>- Grupo 2: 2, 3, 6 e 7</li>
              </ul>
              <li>- Pontos corridos novamente, com turno e returno, no mesmo formato acima, porém partidas são FT5</li>
              <li>- Top 2 de cada grupo se classifica para a próxima season diretamente</li>
              <li>- O vencedor de cada grupo se classifica para a Grande Final</li>
            </ul>
          </AccordionContent>
          </AccordionItem>
        <AccordionItem value="item-3">
        <AccordionTrigger className="text-2xl font-lemonmilk uppercase">A GRANDE FINAL</AccordionTrigger>
            <hr className='border-1'/>
            <AccordionContent className="pt-2 pl-3">
            <ul className="text-lg">
              <li>- FT2 de FT5.</li>
              <li>- Para se sagrar campeão, é necessário vencer duas FT5</li>
            </ul>
            </AccordionContent>
          </AccordionItem>
      </Accordion>
    </section>
    <section className="mr-12 w-[682px]">
      <h1 className="text-4xl font-lemonmilk">REGRAS UNIVERSAIS</h1>
      <hr className='border-t-2'/>
      <Accordion type="single" collapsible className="w-full px-3 text-base">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-lemonmilk uppercase">SISTEMA DE PONTOS</AccordionTrigger>
          <hr className='border-1'/>
          <AccordionContent className="pt-2 pl-3">
            <ul className="text-lg">
              <li>- Cada match dá um ponto (Ex: um set 3-2 dá 3 pontos ao vencedor e 2 ao perdedor)</li>
              <li>- A pontuação utilizada depende da quantidade de participantes p/ torneio</li>
              <ul className="pl-4">
                <li>- 32 participantes ou menos: PONTUA O TOP 8</li>
                <li>- Entre 33 participantes e 48: PONTUA O TOP 12</li>
                <li>- Acima de 49 particicipantes: PONTUA O TOP 16</li>
              </ul>
              <li className="font-bold">OBS: Utilizado em todas as fases de pontos corridos</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        </Accordion>        
    </section>
    </div>
  )
}