import { StaticImageData } from 'next/image';

import company01 from '@/img/career/01.jpg'
import company02 from '@/img/career/02.jpg'

import company01Big from '@/img/career/01-big.jpg'
import company02Big from '@/img/career/02-big.jpg'

export interface Company {
  id: number
  title: string
  workTime: string
  info: string
  stack: string
  img: StaticImageData
  imgBig: StaticImageData
  website: string
}

export const company: Company[] = [
  {
    id: 0,
    title: 'IIS',
    workTime: '1 year 2 months',
    info: `Responsibilities:
- Developing web applications and internal services on React, Redux, Next.js. 
- Creating and optimizing user interface components for client projects. 
- Developing an administrative panel for managing content on websites. 
- Adaptive and cross-browser layout. 
- Working with server data via REST API. 

Achievements: 
- Developed a set of reusable UI components, which accelerated interface development and simplified code support. 
- Improved page adaptability and layout, ensuring full compliance with Figma layouts and ease of use. 
- Helped the team fix bugs and refactor code, which reduced the number of critical errors in production.`,
    stack: 'JavaScript, React, Redux, Next.js, Sass.',
    img: company01,
    imgBig: company01Big,
    website: ' ',
  },
  {
    id: 1,
    title: 'Informatiсa',
    workTime: '1 year 11 months',
    info: `Responsibilities:
- Development of JS modules for maintaining electronic document management at Gazprom Transgaz Saint Petersburg
- Integration of the system with the external banking service Gazprombank via REST API.
- Participation in discussions of technical solutions and architecture with a team of 12 people.
- Code refactoring and adding new features to improve performance and long-term support of the system.

Achievements:
- Redesigned the architecture of one of the key modules, which reduced data processing time by 30%.
- Optimized interaction with the server via REST API.
- Created more than 20 libraries of graphic elements for the vector graphics editor "ASMOgraf".
- Led a team of 7 people during the adaptation of the platform for the ALT Linux OS, ensuring the successful transfer of the system on time.`,    
    stack: 'JavaScript, REST API, SQL, Postgresql, Linux.',
    img: company02,
    imgBig: company02Big,
    website: 'https://informatika37.ru/',
  },
]
