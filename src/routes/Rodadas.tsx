import RodadaSelector from "@/components/RodadaSelector";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
export default function Rodadas() {
  return (

    <Accordion type="single" collapsible className="w-full px-3 text-base">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-lemonmilk uppercase">Fase 1</AccordionTrigger>
          <hr className='border-1'/>
          <AccordionContent className="pt-2 pl-3">
            <RodadaSelector/>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl font-lemonmilk uppercase">Fase 2</AccordionTrigger>
          <hr className='border-1'/>
          <AccordionContent className="pt-2 pl-3">
            <RodadaSelector/>
          </AccordionContent>
        </AccordionItem>
    </Accordion>
  )
}