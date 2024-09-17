import Rugal from '/Rugal_Proibido_2003.mp4'
import FS from '/fs.webm'
import JA from '/ja.webm'
import KG from '/kg.webm'

const vidLink = (): string => {
  const num = Math.floor(Math.random() * (100)) + 1
  if (num >= 1 && num < 33) {
    return FS
  } else if (num >= 33 && num < 66) {
    return JA
  } else if (num >= 66 && num < 100) {
    return KG
  } else if (num == 100) {
    return Rugal
  }

  return ''
}

export default function Video() {
  const video = vidLink()
  return (
    <video autoPlay loop muted preload='auto' src={video} id='video'/>
  )
}