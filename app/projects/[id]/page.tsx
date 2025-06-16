import Image from 'next/image';
import BtnGitHub from '@/components/btnGitHub/BtnGitHub';
import { projects } from '@/helpers/projectsList';
import type { Project } from '@/helpers/projectsList';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}


export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project: Project | undefined = projects[Number(id)];

  if (!project) {
    return (
      <div className="error-container">
        <div className="error-message">Проект не найден</div>
      </div>
    );
  }

  return (
    <main className="project-details">
      <div className="container">
        <div className="project-details">

          <h1 className="title-1">{project.title}</h1>

          <Image
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
            placeholder="blur"
          />

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          {project.gitHubLink && (
            <BtnGitHub
              link={project.gitHubLink}
              text={project.gitHubLink.includes('github') ? 'GitHub repo' : 'Visit site'}
            />
          )}
        </div>
      </div>
    </main>
  );
}
