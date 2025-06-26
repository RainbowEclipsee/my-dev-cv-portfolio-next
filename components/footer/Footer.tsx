import './style.css'

import IconGitHub from '@/components/icons/IconGitHub'
import IconTelegram from '@/components/icons/IconTelegram'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a 
                href="https://t.me/makarchuk_bogdan" target="blank" 
                style={{color: 'inherit', marginLeft: '-15px'}}>
                <IconTelegram width={50} height={50} />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/RainbowEclipsee" target="blank" >
                <IconGitHub width={38} height={38} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
