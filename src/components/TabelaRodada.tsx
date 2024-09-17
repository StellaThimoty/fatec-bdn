import {   Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from "./ui/table";
import data from '@/assets/qualifiers.json'

export default function TabelaRodada() {
  return (
    <Table className="uppercase font-lemonmilk">
      <TableHeader>
        <TableRow className="text-center text-lg text-white">
          <TableHead>Pos</TableHead>
          <TableHead className="text-left">Nome</TableHead>
          <TableHead>PTS</TableHead>
          <TableHead>Record</TableHead>
          <TableHead>Dif. Pts.</TableHead>
          <TableHead>TB</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((val) => (
          <TableRow key={val.username} className="text-center text-lg border-4 border-black/100">
            <TableCell className="bg-textPurple size-[3rem] border-4 border-black/100">{val.position}</TableCell>
            <TableCell className="text-left text-textPurple bg-white border-4 border-black/100">{val.username}</TableCell>
            <TableCell className="bg-textPurple size-[3rem] border-4 border-black/100">{val.total_points}</TableCell>
            <TableCell className="text-textPurple bg-white h-[3rem] w-[5rem] border-4 border-black/100">9-0</TableCell>
            <TableCell className="bg-textPurple h-[3rem] w-[7rem] border-4 border-black/100">69</TableCell>
            <TableCell className="text-textPurple bg-white size-[3rem] border-4 border-black/100">0</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}