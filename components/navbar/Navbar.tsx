import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BtnDarkMode from '../btnDarkMode/BtnDarkMode'

import './style.css'

const Navbar: React.FC = () => {
  const pathname = usePathname()

  const activeLink = 'nav-list__link nav-list__link--active'
  const defaultLink = 'nav-list__link'

  const getLinkClass = (path: string) => (pathname === path ? activeLink : defaultLink)

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <Link href="/" className="logo">
            <strong>Dev</strong> portfolio
          </Link>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <Link href="/" className={getLinkClass('/')}>
                Home
              </Link>
            </li>

            <li className="nav-list__item">
              <Link href="/career" className={getLinkClass('/career')}>
                Career
              </Link>
            </li>

            <li className="nav-list__item">
              <Link href="/projects" className={getLinkClass('/projects')}>
                Projects
              </Link>
            </li>

            <li className="nav-list__item">
              <Link href="/contacts" className={getLinkClass('/contacts')}>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
