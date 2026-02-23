import { useState, useMemo } from 'react';
import { projects, tabs } from '../data/projectData.js';
import ProjectCard from './ProjectCard';
import '../css/project.css'
import '../css/media_css/project.css'

export default function Project() {
    const [active, setActive] = useState("All");

    const filterProject = useMemo(() => {
        if (active === "All")
            return projects;
        return projects.filter(project => project.category === active);
    }, [active]);

    return (
        <>
            <section id="project">
                <h1 className='project-heading'>Project</h1>

                <div className='project-button'>
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className={`btn ${active === tab ? "active" : ""}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="project-container">
                    {filterProject.length === 0
                        ? <p className="no-projects">Right now no projects found in this category.</p>
                        : filterProject.map(p => <ProjectCard key={p.id} project={p} />)
                    }
                </div>
            </section>
        </>

    )
}