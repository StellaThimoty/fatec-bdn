export default function TextSpacer({text1, text2}:{text1: string, text2: string}) {
  return(
    <div className="flex justify-stretch">
      <p className='mx-2'>{text1}</p>
      <p className='border-b border-dotted flex-grow self-center'></p>
      <p className='mx-2'>{text2}</p>
    </div>
  )
}