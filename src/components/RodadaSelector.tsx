import { useState } from "react"
import partidas from '@/assets/partidas.json'
import { Table, TableBody, TableCell, TableRow } from './ui/table'

// Isso poderia ser dividido em dois componentes mas eu não estou
// com saco pra fazer essa reescrita de passar props e sei lá o que

export default function RodadaSelector() {
  const [pos, setPos] = useState(1)

  return (
      <>
        <div className="flex flex-row text-center content-center place-items-center max-[840px]:justify-center mt-4">
          <div className="flex min-[840px]:flex-row flex-col text-center content-center place-items-center">
            <p className="font-lemonmilk uppercase text-[2rem] mr-4">RODADA - {pos}</p>
            <div className="flex flex-row max-[860px]:mt-4 text-center content-center place-items-center">
              {partidas.map((_val, index) => (
                <button key={index} className="font-lemonmilk uppercase text-[1.5rem] text-center mx-0.5 bg-textPurple/50 hover:bg-textPurple/70 focus:bg-textPurple/100 size-[3rem] border-2 border-black" type="button" value={index+1} onClick={(e) => setPos(Number(e.currentTarget.value))}>{index+1}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex min-[840px]:flex-row flex-col mt-4 justify-around text-center uppercase font-lemonmilk">
          <Table className="uppercase font-lemonmilk m-2 mx-2 w-11/12 ">
            <TableBody>
              {partidas.slice(pos-1, pos).map((partida) => (
                partida.rodada.slice(0,3).map((vs) => (
                <TableRow key={vs.p1} className="text-center text-lg border-4">
                  <TableCell className="text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50 w-[230px]">{vs.p1}</TableCell>
                  <TableCell className="bg-textPurple/70 border-4 border-black/100 hover:bg-textPurple/50 size-[3rem]">VS</TableCell>
                  <TableCell className="text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50 w-[230px]">{vs.p2}</TableCell>
                </TableRow>
                ))))}
            </TableBody>
          </Table>
          <Table className="uppercase font-lemonmilk m-2 mx-2 w-11/12">
            <TableBody>
              {partidas.slice(pos-1,pos).map((partida) => (
                partida.rodada.slice(3,6).map((vs) => (
                <TableRow key={vs.p1} className="text-center text-lg border-4">
                  <TableCell className="text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50 w-1/2 w-[230px]">{vs.p1}</TableCell>
                  <TableCell className="bg-textPurple/70 border-4 border-black/100 hover:bg-textPurple/50 size-[3rem]">VS</TableCell>
                  <TableCell className="text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50 w-1/2 w-[230px]">{vs.p2}</TableCell>
                </TableRow>
                ))))}
            </TableBody>
          </Table>
        </div>
    </>
  )
}
