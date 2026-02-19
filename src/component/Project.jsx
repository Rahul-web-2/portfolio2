import '../css/project.css'
import { projects, tabs } from '../data/projectData';
import ProjectCard from './projectCard';
import { useState, useMemo } from 'react';

export default function Project() {
    const [active, setActive] = useState("All");

    const filterProject = useMemo(() => {
        if (active === "All")
            return projects;
        return projects.filter(project => project.category === active);
    }, [active]);

    return (
        <section id="project">

            <div className="container">
                <h1>Project</h1>
                <div>
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className={`btn ${active === tab ? "active" : ""}`}
                        >
                            {tab}
                        </button>
                    ))}

                    {filterProject.length === 0
                        ? <p className="no-projects">Right now no projects found in this category.</p>
                        : filterProject.map(p => <ProjectCard key={p.id} project={p} />)
                    }
                </div>

                <div className="project-grid">
                    {filterProject.map(p => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>

            </div>
        </section>
    )
}