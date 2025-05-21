import StaffCard from "@/components/StaffCard";
import { Separator } from '@/components/ui/separator'

export default function Staff() {
  return (
    <>
      <div className='ml-8 max-[723px]:ml-0'>
        <h1 className="text-4xl font-lemonmilk pt-8">ORGANIZADORES</h1>
        <Separator className='border-1 min-[723px]:w-[682px]'/>
        <div className="flex min-[970px]:flex-row flex-col">
          <StaffCard person='hakkou' handle="hakkou.moe" />
          <StaffCard person='knox' handle="ggsknox.bsky.social" />
        </div>
        <h1 className="text-4xl font-lemonmilk pt-8">NARRADORES</h1>
        <Separator className='border-1 min-[723px]:w-[682px]'/>
        <div className="flex min-[970px]:flex-row flex-col">
          <StaffCard person='hakkou' handle="hakkou.moe" />
        </div>
        <h1 className="text-4xl font-lemonmilk pt-8">DESIGNERS</h1>
        <Separator className='border-1 min-[723px]:w-[682px]'/>
        <div className="flex min-[970px]:flex-row flex-col">
          <StaffCard person="efzstella" handle="efzstella.moe" yt="StellaEFZ" gh="StellaThimoty" />
          <StaffCard person="hiquesz" gh="Hiquesz" />
        </div>
        <h1 className="text-4xl font-lemonmilk pt-8">PROGRAMADORES</h1>
        <Separator className='border-1 min-[723px]:w-[682px]'/>
        <div className="flex min-[970px]:flex-row flex-col">
          <StaffCard person="efzstella" handle="efzstella.moe" yt="StellaEFZ" gh="StellaThimoty" />
          <StaffCard person="hiquesz" gh="Hiquesz" />
          <StaffCard person="itsyaboy" handle="codeepsilon.moe" />
        </div>
      </div>
    </>
  )
}