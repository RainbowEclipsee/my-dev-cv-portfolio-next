import Header from '@/components/header/Header'

export default function Home(){
  return (
    <div>
      <Header />

      <main className="section ">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, React / Redux, Next, VueJS, CSS, REST API 
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, SQL</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

