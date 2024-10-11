import { Cross2Icon } from "@radix-ui/react-icons";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose, DialogHeader } from "./ui/dialog";
import { TableRow, TableCell } from "./ui/table";
import { useState } from "react";

export default function RodadaDesktop({p1, p2, vod, score_p1="0", score_p2="0"}: {p1: string, p2:string, vod?:string, score_p1?: string, score_p2?: string}) {
  const [open, setOpen] = useState(false)
  
  return (
    <Dialog open={open} onOpenChange={setOpen}> 
      <DialogTrigger asChild>
      <TableRow key={p1} className="text-center text-lg border-4">
        <TableCell className="text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50 w-[230px]"><div>{p1}</div><div>{score_p1}</div></TableCell>
        <TableCell className="bg-textPurple/70 border-4 border-black/100 hover:bg-textPurple/50 size-[3rem]">VS</TableCell>
        <TableCell className="text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50 w-[230px]"><div>{p2}</div><div>{score_p2}</div></TableCell>
      </TableRow>
      </DialogTrigger>
      <DialogContent className="flex flex-col text-lg bg-navbarGray justify-center">
        <DialogHeader className="flex flex-row uppercase justify-between font-lemonmilk text-textPurple">
          <DialogTitle className="self-center">VOD - {p1} vs {p2}</DialogTitle>
          <DialogClose>
          <Cross2Icon className="h-8 w-8" />
          </DialogClose>
        </DialogHeader>
        <iframe className="ml-[0.4rem]" src={vod ? `https://youtube.com/embed/${vod}` : 'https://youtube.com/embed/l7O9sBFsrfY'} width={640} height={480}/>
      </DialogContent>
    </Dialog>
  )
}