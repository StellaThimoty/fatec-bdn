import RodadaSelector from "@/components/RodadaSelector";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
export default function Rodadas() {
  const campComecou = false;
  const fase1 = false;
  const fase2 = false;

  return (
    <>
      {!campComecou ? <h1 className="text-4xl text-center mt-12 font-lemonmilk uppercase">Rodadas ainda não anunciadas!</h1> :
      <Accordion type="single" collapsible className="w-full px-3 text-base">
        {fase1 &&
          <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-lemonmilk uppercase">Fase 1</AccordionTrigger>
          <hr className='border-1'/>
          <AccordionContent className="pt-2 pl-3">
            <RodadaSelector/>
          </AccordionContent>
        </AccordionItem>}
        {fase2 &&
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl font-lemonmilk uppercase">Fase 2</AccordionTrigger>
          <hr className='border-1'/>
          <AccordionContent className="pt-2 pl-3">
            <RodadaSelector/>
          </AccordionContent>
        </AccordionItem>}
    </Accordion>}
</>
  )
}