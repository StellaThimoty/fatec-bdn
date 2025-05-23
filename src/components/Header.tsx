import { NavLink } from 'react-router-dom'
//  Everything in the middle could be put in a for loop since they all use the 
// same classes and everything except for the first and last elements
// But I didn't wanna think about  a way to make it go smoother so I did it this way
export default function Header() {
  return (
    <>
      <nav draggable="false" className="select-none font-lemonmilk flex place-items-center place-content-center bg-navbarGray" role="navigation" aria-label="main navigation">
        <NavLink to='home' draggable="false" className={({isActive}) => isActive ? "ml-auto mr-5 mx-5 py-4 text-textPurple decoration-4 underline-offset-4 select-none underline" : "ml-auto mr-5 mx-5 my-4 text-textPurple select-none underline-hover"}>
        &nbsp;HOME&nbsp;
        </NavLink> 
        <NavLink to='regulamento' draggable="false" className={({isActive}) => isActive ? "mx-5 py-4 text-textPurple decoration-4 underline-offset-4 select-none underline" : "mx-5 my-4 text-textPurple select-none underline-hover"}>
        &nbsp;REGULAMENTO&nbsp;
        </NavLink>
        <NavLink to='rodadas' draggable="false" className={({isActive}) => isActive ? "mx-5 py-4 text-textPurple decoration-4 underline-offset-4 select-none underline" : "mx-5 my-4 text-textPurple select-none underline-hover"}>
        &nbsp;RODADAS&nbsp;
        </NavLink>
        <NavLink to='tabela' draggable="false" className={({isActive}) => isActive ? "mx-5 py-4 text-textPurple decoration-4 underline-offset-4 select-none underline" : "mx-5 my-4 text-textPurple select-none underline-hover"}>
        &nbsp;TABELA&nbsp;
        </NavLink>
        <NavLink to='staff' draggable="false" className={({isActive}) => isActive ? "mr-auto ml-5 mx-5 py-4 text-textPurple decoration-4 underline-offset-4 select-none underline" : "mr-auto ml-5 mx-5 my-4 text-textPurple select-none underline-hover"}>
        &nbsp;STAFF&nbsp;
        </NavLink>
      </nav>
    </>
  )
}