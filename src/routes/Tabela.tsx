import TabelaQualifiers from '@/components/TabelaQualifiers'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TabelaRodada from '@/components/TabelaRodada';
import TabelaFinal from '@/components/TabelaFinal';

export default function Tabela() {
  const fase1 = true;
  const fase2 = true; 
  // Mudar quando necessário 
  return (
    <>
    <Accordion type="single" collapsible className="w-full px-3 text-base">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-lemonmilk uppercase">Classificatória</AccordionTrigger>
          <hr className='border-1'/>
          <AccordionContent className="pt-2 pl-3">
            <TabelaQualifiers/>
          </AccordionContent>
        </AccordionItem>
        { fase1 &&
          <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl font-lemonmilk uppercase">Fase 1</AccordionTrigger>
          <hr className='border-1'/>
          <AccordionContent className="pt-2 pl-3">
            <TabelaRodada/>
          </AccordionContent>
        </AccordionItem>}
        { fase2 && 
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl font-lemonmilk uppercase">Fase 2</AccordionTrigger>
          <hr className='border-1'/>
          <AccordionContent className="pt-2 pl-3">
            <TabelaFinal/>
          </AccordionContent>
        </AccordionItem>}
    </Accordion>
    </>
  )
}
