import { GitHubLogoIcon } from "@radix-ui/react-icons"

export default function Footer() {
  return (
      <footer className="text-center text-white w-[100%] uppercase font-lemonmilk pt-12 bg-backgroundPurple/75">
          <div className="flex flex-row justify-center justify-items-center content-center items-center h-[30px]">
            <p className="self-end">Este site é código livre</p>
            <a href="https://github.com/StellaThimoty/bdn-react-vite"><GitHubLogoIcon className="ml-2 size-5"/></a> <br/>
          </div>
          <div className="flex flex-row justify-around uppercase font-lemonmilk p-4">
            <div>
              <ul>Feito por
                <li><a href="https://bsky.app/profile/efzstella.moe">EfzStella</a></li>
                <li><a href="https://bsky.app/profile/hakkou.moe">Hakkou</a></li>
                <li><a href="https://bsky.app/profile/codeepsilon5.moe">CodeEpsilon</a></li>
              </ul> 
            </div>
            <div>
              Desenhado por
              <ul>
                <li><a href="https://bsky.app/profile/ferovsky935.bsky.social">Ferovksy</a></li>
                <li><a href="https://bsky.app/profile/desertmonkeyba.bsky.social">Desertmonkey</a></li>
              </ul>
            </div>
          </div>
      </footer>
  )
}