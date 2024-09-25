import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import data from '@/assets/classificacao.json'

export default function TabelaFinal() {
  return (
    <Table className="uppercase font-lemonmilk w-full">
      <TableHeader>
        <TableRow className="text-center text-lg text-white">
          <TableHead>Pos</TableHead>
          <TableHead className="text-left">Nome</TableHead>
          <TableHead>PTS</TableHead>
          <TableHead>Record</TableHead>
          <TableHead className="text-center">Dif. Pts</TableHead>
          <TableHead>TB</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.slice(0,4).map((val, index) => (
          <TableRow key={val.name} className="text-center text-lg border-4 border-black">
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{index}</TableCell>
            <TableCell className="text-left text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50">{val.name}</TableCell>
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{val.points}</TableCell>
            <TableCell className="text-textPurple bg-white/70 h-[3rem] w-[5rem] border-4 border-black/100 hover:bg-white/50">{val.wins} - {val.losses}</TableCell>
            <TableCell className="bg-textPurple/70 h-[3rem] w-[7rem] border-4 border-black/100 hover:bg-textPurple/50">{val.diff_pts}</TableCell>
            <TableCell className="text-textPurple bg-white/70 size-[3rem] border-4 border-black/100 hover:bg-white/50">{val.tie_breaker}</TableCell>
          </TableRow>
        ))}
        <TableRow className="text-center text-lg border-4 border-black">
          <TableCell colSpan={6} className="text-center text-lg border-4 border-black/100 text-neutral-400">
            <div className="flex flex-row justify-around">
              <div className="flex flex-row align-center text-center items-center"><FaChevronUp/>&nbsp;GRUPO A&nbsp;<FaChevronUp/></div>
              <div className="flex flex-row align-center text-center items-center"><FaChevronDown/>&nbsp;GRUPO B&nbsp;<FaChevronDown/></div>
            </div>
          </TableCell>
        </TableRow>
        {data.slice(4,data.length).map((val, index) => (
          <TableRow key={val.name} className="text-center text-lg border-4 border-black/100">
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{index}</TableCell>
            <TableCell className="text-left text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50">{val.name}</TableCell>
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{val.points}</TableCell>
            <TableCell className="text-textPurple bg-white/70 h-[3rem] w-[5rem] border-4 border-black/100 hover:bg-white/50">{val.wins} - {val.losses}</TableCell>
            <TableCell className="bg-textPurple/70 h-[3rem] w-[7rem] border-4 border-black/100 hover:bg-textPurple/50">{val.diff_pts}</TableCell>
            <TableCell className="text-textPurple bg-white/70 size-[3rem] border-4 border-black/100 hover:bg-white/50">{val.tie_breaker}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}