import './style.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__wrapper border">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Bogdan</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>
            driven by curiosity and ideas 
            <span className="blinking-cursor">_</span>  
          </p>
        </div>
        <a href="/assets/Makarchuk Bogdan.pdf"
           target="_blank"
           className="btn"
           >
          Download CV
        </a>
      </div>
    </header>
  )
}

export default Header
