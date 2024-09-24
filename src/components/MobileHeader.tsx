import { NavLink } from 'react-router-dom'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from './ui/sheet'
import { Separator } from './ui/separator'
import { GiHamburgerMenu } from 'react-icons/gi'

//  Everything in the middle could be put in a for loop since they all use the 
// same classes and everything except for the first and last elements
// But I didn't wanna think about  a way to make it go smoother so I did it this way
export default function MobileHeader() {
  return (
    <>
      <Sheet>
        <SheetTrigger className='font-lemonmilk flex py-4 bg-navbarGray w-full text-textPurple'><GiHamburgerMenu className='mx-4 mt-0.5'/> LIGA BARÕES DA NOITE - UNIBR</SheetTrigger>
        <SheetContent side={'left'} className='bg-navbarGray font-lemonmilk w-[360px]'>
          <SheetHeader>
            <SheetTitle className='text-lg uppercase'>Barões da Noite</SheetTitle>
            <Separator className='bg-text-purple'/>
            <SheetDescription className='flex flex-col text-2xl'>
            <NavLink to='home' className={({isActive}) => isActive ? "mx-5 py-4 text-textPurple decoration-4 underline-offset-4 underline" : "mx-5 my-4 text-textPurple underline-hover"}>
            &nbsp;HOME&nbsp;
            </NavLink> 
            <NavLink to='regulamento' className={({isActive}) => isActive ? "mx-5 py-4 text-textPurple decoration-4 underline-offset-4 underline" : "mx-5 my-4 text-textPurple underline-hover"}>
            &nbsp;REGULAMENTO&nbsp;
            </NavLink>
            <NavLink to='rodadas' className={({isActive}) => isActive ? "mx-5 py-4 text-textPurple decoration-4 underline-offset-4 underline" : "mx-5 my-4 text-textPurple underline-hover"}>
            &nbsp;RODADAS&nbsp;
            </NavLink>
            <NavLink to='tabela' className={({isActive}) => isActive ? "mx-5 py-4 text-textPurple decoration-4 underline-offset-4 underline" : "mx-5 my-4 text-textPurple underline-hover"}>
            &nbsp;TABELA&nbsp;
            </NavLink>
            <NavLink to='staff' className={({isActive}) => isActive ? "mx-5 py-4 text-textPurple decoration-4 underline-offset-4 underline" : "mx-5 my-4 text-textPurple underline-hover"}>
            &nbsp;STAFF&nbsp;
            </NavLink>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}