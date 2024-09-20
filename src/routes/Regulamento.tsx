import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Regulamento() {
  return (
    <div className="flex min-[970px]:flex-row flex-col">
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
              <li>- 2 grupos de 4 jogadores baseados na colocação do Top 8: </li>
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
    <section className="mx-8 w-[682px] max-[970px]:mt-12">
      <h1 className="text-4xl font-lemonmilk">REGRAS UNIVERSAIS</h1>
      <hr className='border-t-2'/>
      <Accordion type="single" collapsible className="w-full px-3 text-base">
      <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-lemonmilk uppercase">REGRAS GERAIS</AccordionTrigger>
          <hr className='border-1'/>
          <AccordionContent className="pt-2 pl-3">
            <ul className="text-lg">
              <li>- As partidas serão realizadas nos patches mais recentes sempre que disponíveis, podendo ser adiadas caso seja encontrado algum bug que impossibilite a realização das rodadas.</li>
              <li>- Proibimos qualquer tipo de trapaça, abuso de bugs ou glitches que deem uma vantagem competitiva óbvia. A organização da Liga Barões da Noite reserva o direito de banir personagens/técnicas/moves/etc. que julgar infringir a competitividade justa da realização do torneio e enquadrar no que fora proibido acima.</li>
              <li>- Comportamentos tóxicos dos participantes (injúrias que ferem a honra/integridade de outros) em qualquer canal de comunicação público que possa ser relacionado a liga.</li>
              <li>- A organização da Liga Barões da Noite reserva o direito de remover qualquer participante sem aviso prévio caso as regras acima ou relacionadas de outras comunidades de jogos de luta sejam quebradas. Aplicaremos o bom-senso caso a infração não esteja coberta pelas definições prévias.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl font-lemonmilk uppercase">CRITÉRIOS DE QUALIFICAÇÃO</AccordionTrigger>
          <hr className='border-1'/>
          <AccordionContent className="pt-2 pl-3">
            <ul className="text-lg">
            <li>- Sistema de pontuação de acordo com a colocação em campeonatos de relevância.</li>
            <li>- Pontos foram conquistados durante todos os campeonatos Quinzenais organizados pelo Zate. A partir do segundo até o último realizado antes do da data de corte.</li>
            <li>- Data de corte foi o dia 31 de Setembro de 2024.</li>
            <li>- A pontuação utilizada e seus critérios para pontuar um participante dependem da quantidade de participantes por torneio. Portanto, foi utilizada a seguinte distribuição:</li>
              <ul className="pl-4">
                <li>- 32 participantes ou menos: Top 8 pontua.</li>
                <li>- Entre 33 participantes e 48: Top 12 pontua.</li>
                <li>- Acima de 49 participantes: Top 16 pontua.</li>
              </ul>  
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl font-lemonmilk uppercase">SISTEMA DE PONTUAÇÃO</AccordionTrigger>
          <hr className='border-1'/>
          <AccordionContent className="pt-2 pl-3">
            <ul className="text-lg">
              <li>Definições de termos:</li>
              <ul className="pl-4">
                <li>- Match: Referente a uma partida composta por 2 rounds dentro de um jogo.</li>
                <li>- Set: Referente partidas realizadas em conjunto, culminando em uma partida completa.</li>
                <li>- EX: Jogador A 3 x 2 Jogador B; Este set completo teve 5 matches, onde o jogador A venceu três e o jogador B venceu duas.</li>
              </ul>
              <li>Sistema de pontuação</li>
              <ul className="pl-4">
                <li>- Cada match vencida por um jogador lhe dará um ponto.</li>
              </ul>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-2xl font-lemonmilk uppercase">CRITÉRIOS DE DESEMPATE</AccordionTrigger>
          <hr className='border-1'/>
          <AccordionContent className="pt-2 pl-3">
            <ul className="text-lg">
              <li>Critérios de desempate:</li>
              <ul className="pl-4">
                <li>- Pontos conquistados</li>
                <li>- Diferença de pontos conquistados e cedidos</li>
                <li>- Tiebreaker (Número de partidas vencidas contra os adversários empatados)</li>
                <li>- Recorde de partidas (W-L)</li>
                <li>- FT2 entre os empatados, caso não seja possível desempatar através dos métodos acima.</li>
              </ul>
            </ul>
          </AccordionContent>
        </AccordionItem>
        </Accordion>        
    </section>
    </div>
  )
}