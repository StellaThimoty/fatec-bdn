import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <nav className="font-lemonmilk bg-purple" role="navigation" aria-label="main navigation">
        <Link to='home' className=''>
          HOME
        </Link>
        <Link to='regulamento' className=''>
          REGULAMENTO
        </Link>
        <Link to='rodadas' className=''>
          RODADAS
        </Link>
        <Link to='tabela' className=''>
          TABELA
        </Link>
        <Link to='staff' className=''>
          STAFF
        </Link>
      </nav>
    </>
  )
}