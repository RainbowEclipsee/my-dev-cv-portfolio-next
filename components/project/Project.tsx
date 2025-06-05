import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import './style.css'

interface ProjectProps {
  title: string
  img: StaticImageData
  index: number
}

const Project: React.FC<ProjectProps> = ({ title, img, index }) => {
  return (
    <li className="project">
      <Link href={`/project/${index}`}>
          <Image
            src={img}
            alt={title}
            width={300}
            height={200}
            placeholder="blur"
            className="project__img"
          />
        <h3 className="project__title">{title}</h3>
      </Link>
    </li>
  )
}

export default Project
