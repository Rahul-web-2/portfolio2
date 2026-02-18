export default function ProjectCard({ project }) {
    return (
        <div>
            <div className="project-card">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.alt || project.title}
                        loading="lazy" 
                    />
                ) : null}
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                <p>{project.description}
                    <a href={project.link} target='_blank' rel="noreferrer">Read more</a>
                </p>
            </div>
        </div>
    )
}