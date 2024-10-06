import { useState } from "react"
import partidas from '@/assets/partidas.json'
import { Table, TableBody} from './ui/table'
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import RodadaDesktop from "./RodadaVodDesktop"
import RodadaMobile from "./RodadaVodMobile"
import { cn } from "@/lib/utils"

// Isso poderia ser dividido em dois componentes mas eu não estou
// com saco pra fazer essa reescrita de passar props e sei lá o que

export default function RodadaSelector() {
  const [pos, setPos] = useState(1)
  const isDesktop = window.innerWidth > 700

  return (
      <>
        <div className="flex flex-row place-items-center max-[840px]:justify-center mt-4">
          <div className="flex min-[840px]:flex-row flex-col overflow-x-auto">
            <p className={cn("font-lemonmilk uppercase text-[2rem] mr-4", isDesktop ? "place-self-center" : "mt-4 place-self-end")}>RODADA - {pos}</p>
            <ToggleGroup variant={"outline"} type="single" className="flex flex-row max-[860px]:mt-4 place-self-start">
            {partidas.map((_, index) => (
                <ToggleGroupItem key={index} tabIndex={index} value={String(index+1)} className="font-lemonmilk uppercase size-[3rem] text-[1.5rem] text-center border-2 border-black shrink-0 bg-textPurple/70 hover:bg-navbarGray/80 text-neutral-100 hover:text-textPurple/80 data-[state=on]:bg-neutral-100 data-[state=on]:text-textPurple" type="button" onClick={(e) => setPos(Number(e.currentTarget.textContent))}>{index+1}</ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>
        <div className="flex min-[840px]:flex-row flex-col mt-4 justify-around text-center uppercase font-lemonmilk">
          <Table className="uppercase font-lemonmilk m-2 mx-2 w-11/12 ">
            <TableBody>
              {partidas.slice(pos-1, pos).map((partida) => (
                partida.rodada.slice(0,3).map((vs, index) => (
                  isDesktop ? <RodadaDesktop key={index+20} p1={vs.p1} p2={vs.p2} /> : <RodadaMobile key={index+20} p1={vs.p1} p2={vs.p2} />
                ))))}
            </TableBody>
          </Table>
          <Table className="uppercase font-lemonmilk m-2 mx-2 w-11/12">
            <TableBody>
              {partidas.slice(pos-1,pos).map((partida) => (
                partida.rodada.slice(3,6).map((vs, index) => (
                  isDesktop ? <RodadaDesktop key={index+40} p1={vs.p1} p2={vs.p2} /> : <RodadaMobile key={index+40} p1={vs.p1} p2={vs.p2} />
                ))))}
            </TableBody>
          </Table>
        </div>
    </>
  )
}
