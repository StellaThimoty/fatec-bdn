import StaffCard from "@/components/StaffCard";

export default function Staff() {
  return (
    <>
      <div className='ml-8'>
        <h1 className="text-4xl font-lemonmilk pt-8">ORGANIZADORES</h1>
        <hr className='border-1 mb-4 w-[682px]'/>
        <div className="flex flex-row">
          <StaffCard person='hakkou' handle="hakkou.moe" yt="" gh="" />
          <StaffCard person='knox' handle="" yt="" gh="" />
        </div>
        <h1 className="text-4xl font-lemonmilk pt-8">NARRADORES</h1>
        <hr className='border-1 mb-4 w-[682px]'/>
        <div className="flex flex-row">
          <StaffCard person='hakkou' handle="hakkou.moe" yt="" gh="" />
        </div>
        <h1 className="text-4xl font-lemonmilk pt-8">DESIGNERS</h1>
        <hr className='border-1 mb-4 w-[682px]'/>
        <div className="flex flex-row">
          <StaffCard person='ferovsky' handle="ferovsky935.bsky.social" yt="Ferovsky" gh="" />
          <StaffCard person='desertmonkey' handle="desertmonkeyba.bsky.social" yt="" gh="" />
        </div>
        <h1 className="text-4xl font-lemonmilk pt-8">PROGRAMADORES</h1>
        <hr className='border-1 mb-4 w-[682px]'/>
        <div className="flex flex-row">
          <StaffCard person="efzstella" handle="efzstella.moe" yt="" gh="StellaThimoty" />
          <StaffCard person="hakkou" handle="hakkou.moe" yt="" gh="" />
          <StaffCard person="codeepsilon" handle="codeepsilon.moe" yt="" gh="" />
        </div>
        <h1 className="text-4xl font-lemonmilk pt-8">AGRADECIMENTOS ESPECIAIS</h1>
        <hr className='border-1 mb-4 w-[682px]'/>
        <div className="flex flex-row">
          <StaffCard person="guizin" handle="" yt="" gh="" />
          <StaffCard person="axuul" handle="" yt="" gh="" />
          <StaffCard person="miidas" handle="" yt="" gh="" />
        </div>
        <div className="flex flex-row mt-4">
          <StaffCard person="eri" handle="" yt="" gh="" />
          <StaffCard person="jaca" handle="" yt="" gh="" />
          <StaffCard person="eon" handle="" yt="" gh="" />
        </div>
      </div>
    </>
  )
}