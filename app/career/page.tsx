import PlaceOfWork from '@/components/placeOfWork/PlaceOfWork'
import { company, type Company as CompanyType } from '@/helpers/careerList'

export default function Career() {
  return (
    <div>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Career</h2>
          <ul className="projects">
            {company.map((company: CompanyType) => (
              <PlaceOfWork
                key={company.id}
                title={company.title}
                workTime={company.workTime}
                info={company.info}
                stack={company.stack}
                website={company.website}
                img={company.img}
                index={company.id}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
