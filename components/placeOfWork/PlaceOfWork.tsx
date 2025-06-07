import Image, { StaticImageData } from 'next/image'
import './style.css'

interface PlaceOfWorkProps {
  title: string
  workTime: string
  img: StaticImageData
  info: string
  stack: string
  website: string
  index: number
}

const PlaceOfWork: React.FC<PlaceOfWorkProps> = ({ title, workTime, img, info, stack, website }) => {
  return (
    <li className="career-item">
      <div className="career-item__image">
      <Image src={img} alt={title} width={300} height={200} placeholder="blur" />
        {/* <img src={img} alt={title} /> */}
        <p className="career-item__work-time">{workTime}</p>
      </div>
      <div className="career-item__content">
        <h3 className="career-item__title">{title}</h3>
        <pre className="company__info">{info}</pre>
        <p className='stack'><strong>Stack: {stack}</strong></p>

        {website === ' ' ? null : (
          <a
            href={website}
            className="career-item__link"
            target="_blank"
            rel="noreferrer"
          >
            Visit Website
          </a>
        )}
      </div>
    </li>
  )
}

export default PlaceOfWork
