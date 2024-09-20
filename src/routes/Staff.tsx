import StaffCard from "@/components/StaffCard";

export default function Staff() {
  return (
    <>
      <div className='ml-8'>
        <h1 className="text-4xl font-lemonmilk pt-8">ORGANIZADORES</h1>
        <hr className='border-1 w-[682px]'/>
        <div className="flex min-[970px]:flex-row flex-col">
          <StaffCard person='hakkou' handle="hakkou.moe" />
          <StaffCard person='knox' handle="ggsknox.bsky.social" />
        </div>
        <h1 className="text-4xl font-lemonmilk pt-8">NARRADORES</h1>
        <hr className='border-1 w-[682px]'/>
        <div className="flex min-[970px]:flex-row flex-col">
          <StaffCard person='hakkou' handle="hakkou.moe" />
        </div>
        <h1 className="text-4xl font-lemonmilk pt-8">DESIGNERS</h1>
        <hr className='border-1 w-[682px]'/>
        <div className="flex min-[970px]:flex-row flex-col">
          <StaffCard person='ferovsky' handle="ferovsky935.bsky.social" yt="Ferovsky" />
          <StaffCard person='desertmonkey' handle="desertmonkeyba.bsky.social" />
        </div>
        <h1 className="text-4xl font-lemonmilk pt-8">PROGRAMADORES</h1>
        <hr className='border-1 w-[682px]'/>
        <div className="flex min-[970px]:flex-row flex-col">
          <StaffCard person="efzstella" handle="efzstella.moe" yt="StellaEFZ" gh="StellaThimoty" />
          <StaffCard person="hakkou" handle="hakkou.moe" />
          <StaffCard person="codeepsilon" handle="codeepsilon.moe" />
        </div>
        <h1 className="text-4xl font-lemonmilk pt-8">AGRADECIMENTOS ESPECIAIS</h1>
        <hr className='border-1 w-[682px]'/>
        <div className="flex min-[970px]:flex-row flex-col">
          <StaffCard person="guizin" handle="" />
          <StaffCard person="axuul" handle="axuul.bsky.social" />
          <StaffCard person="miidas" handle="" />
        </div>
        <div className="flex min-[970px]:flex-row flex-col min-[970px]:mt-4">
          <StaffCard person="eri" handle="ericorexx.bsky.social" />
          <StaffCard person="jaca" handle="" />
          <StaffCard person="eon" handle="eonfgc.bsky.social" />
        </div>
      </div>
    </>
  )
}