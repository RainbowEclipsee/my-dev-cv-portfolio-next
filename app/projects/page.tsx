import Project from '@/components/project/Project'
import { projects, type Project as ProjectType } from '@/helpers/projectsList'

export default function Projects() {
  return (
    <div>
      <main className="section ">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((project: ProjectType) => (
              <Project
                key={project.id}
                title={project.title}
                img={project.img}
                index={project.id}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}