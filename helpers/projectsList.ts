import { StaticImageData } from 'next/image';

import proj01 from '@/img/projects/01.jpg'
import proj03 from '@/img/projects/03.jpg'
import proj02 from '@/img/projects/02.jpg'
import proj04 from '@/img/projects/04.jpg'
import proj05 from '@/img/projects/05.jpg'
import proj06 from '@/img/projects/06.jpg'
import proj07 from '@/img/projects/07.jpg'
import proj08 from '@/img/projects/08.jpg'

import proj01Big from '@/img/projects/01-big.jpg'
import proj02Big from '@/img/projects/02-big.jpg'
import proj03Big from '@/img/projects/03-big.jpg'
import proj04Big from '@/img/projects/04-big.jpg'
import proj05Big from '@/img/projects/05-big.jpg'
import proj06Big from '@/img/projects/06-big.jpg'
import proj07Big from '@/img/projects/07-big.jpg'
import proj08Big from '@/img/projects/08-big.jpg'

export interface Project {
  id: number, 
  title: string,
  skills: string,
  img: StaticImageData,
  imgBig: StaticImageData,
  gitHubLink: string,
}

export const projects: Project[] = [
  {
    id: 0,
    title: 'Finance tracking',
    skills: 'React, TypeScript',
    img:proj01,
    imgBig: proj01Big,
    gitHubLink:'https://github.com/RainbowEclipsee/react-finance-tracking-app',
  },
  {
    id: 1,
    title: 'Starfounder visit card',
    skills: 'JavaScript, CSS, HTML',
    img:proj02,
    imgBig: proj02Big,
    gitHubLink:'https://github.com/RainbowEclipsee/starfounder-visit-card',
  },
  {
    id: 2,
    title: 'Infinite-Synergy app',
    skills: 'JavaScript, React, Redux Toolkit, Vite, Node.js, Express',
    img:proj03,
    imgBig: proj03Big,
    gitHubLink:'https://github.com/RainbowEclipsee/infinite_synergy-test-task',
  },
  {
    id: 3,
    title: 'CRM card editor',
    skills: 'JavaScript, React, Redux Toolkit, Vite',
    img:proj04,
    imgBig: proj04Big,
    gitHubLink:'https://github.com/RainbowEclipsee/at-work-test',
  },
  {
    id: 4,
    title: 'Duck Shop',
    skills: 'CSS, Vanilla JS',
    img:proj05,
    imgBig: proj05Big,
    gitHubLink:'https://github.com/RainbowEclipsee/project-adwin-agency-test-task',
  },
  {
    id: 5,
    title: 'Enisey33',
    skills: 'JavaScript, React, Redux, Next, Sass',
    img:proj06,
    imgBig: proj06Big,
    gitHubLink:'http://enisey33.ru/about/',
  },
  {
    id: 6,
    title: 'ASMOgraf',
    skills: "Vanilla JavaScript, CSS, Platform solutions",
    img:proj07,
    imgBig: proj07Big,
    gitHubLink:'https://asmograf.ru/',
  },
  {
    id: 7,
    title: 'ASMO system',
    skills: "Vanilla JavaScript, SQL, Platform solutions",
    img:proj08,
    imgBig: proj08Big,
    gitHubLink:'https://informatika37.ru/resheniya-asmo/',
  },

]
