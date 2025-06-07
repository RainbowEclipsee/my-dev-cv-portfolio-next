import './style.css'

import IconVk from '@/components/icons/IconVk'
import IconGitHub from '@/components/icons/IconGitHub'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/rainboweclipse">
                <IconVk width={38} height={23}/>
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/RainbowEclipsee">
                <IconGitHub width={38} height={38}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
