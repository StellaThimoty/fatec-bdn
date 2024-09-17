import { FaBluesky, FaYoutube, FaGithub } from "react-icons/fa6"

export default function StaffCard({person, handle, yt, gh}: {person: string, handle: string, yt?:string, gh?:string}) {
  return (
      <div className="flex flex-row mr-8">
        <img src={'/'+person+'.webp'} alt={person} className="rounded-full size-[85px]" />
        <div>
          <h1 className="underline-staff font-lemonmilkk text-4xl ml-4">{person}</h1>
         <div className="flex flex-row">
          { handle && <a href={"https://bsky.app/profile/"+handle}><FaBluesky className='size-6 ml-6 mt-4'/></a>}
          { yt && <a href={"https://www.youtube.com/@"+yt}><FaYoutube className='size-6 ml-6 mt-4'/></a>}
          { gh && <a href={"https://github.com/"+gh}><FaGithub className='size-6 ml-6 mt-4'/></a>}
          </div>
        </div>
      </div>
  )
}