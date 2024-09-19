import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import data from '@/assets/qualifiers.json'

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
        {data.slice(0,8).map((val) => (
          <TableRow key={val.username} className="text-center text-lg border-4">
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{val.position}</TableCell>
            <TableCell className="text-left text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50">{val.username}</TableCell>
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{val.total_points}</TableCell>
          </TableRow>
        ))}
        <TableRow className="text-center text-lg border-4">
          <TableCell colSpan={3} className="text-center text-lg border-4 border-black/100 text-neutral-400"> ^ PASSAM PARA A PRÓXIMA FASE ^ </TableCell>
        </TableRow>
        {data.slice(8,data.length).map((val) => (
          <TableRow key={val.username} className="text-center text-lg border-4 border-black/100">
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{val.position}</TableCell>
            <TableCell className="text-left text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50">{val.username}</TableCell>
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{val.total_points}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}