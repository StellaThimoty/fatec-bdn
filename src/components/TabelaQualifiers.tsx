import { FaChevronUp } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import data from './../assets/classificacao.json'

export default function TabelaQualifiers() {
  return (
    <Table className="uppercase font-lemonmilk w-full">
      <TableHeader>
        <TableRow className="text-center text-lg text-white">
          <TableHead>Pos</TableHead>
          <TableHead className="text-left">Nome</TableHead>
          <TableHead>PTS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.slice(0,12).map((val, index) => (
          <TableRow key={val.username} className="text-center text-lg border-4">
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{index+1}</TableCell>
            <TableCell className="text-left text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50">{val.username}</TableCell>
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{val.total_points}</TableCell>
          </TableRow>
        ))}
        <TableRow className="text-center text-lg border-4">
          <TableCell colSpan={3} className="text-center text-lg border-4 border-black/100 text-neutral-400">
            <div className="flex flex-row align-center text-center items-center justify-center">
              <FaChevronUp/>&nbsp;CLASSIFICAM PARA O CAMPEONATO&nbsp;<FaChevronUp/>
            </div>
          </TableCell>
        </TableRow>
        {data.slice(12,data.length).map((val, index) => (
          <TableRow key={val.username} className="text-center text-lg border-4 border-black/100">
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{index+13}</TableCell>
            <TableCell className="text-left text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50">{val.username}</TableCell>
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{val.total_points}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
