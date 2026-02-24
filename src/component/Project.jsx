import { useState, useMemo } from 'react';
import { projects, tabs } from '../data/projectData.js';
import ProjectCard from './ProjectCard';
import '../css/project.css'
import '../css/media_css/project.css'
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, pop, stagger } from "../animation/animations.js";

export default function Project() {
    const [active, setActive] = useState("All");

    const filterProject = useMemo(() => {
        if (active === "All")
            return projects;
        return projects.filter(project => project.category === active);
    }, [active]);

    return (
        <>
            <motion.section id="project"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
            >
                <motion.h1 className='project-heading' variants={fadeUp}>Project</motion.h1>

                <motion.div className='project-button' variants={fadeUp}>
                    {tabs.map(tab => (
                        <motion.button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className={`btn ${active === tab ? "active" : ""}`}
                        >
                            {tab}
                        </motion.button>
                    ))}
                </motion.div>
                <motion.div className="project-container"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {filterProject.length === 0
                        ? <p className="no-projects">Right now no projects found in this category.</p>
                        : filterProject.map(p => <ProjectCard key={p.id} project={p} />)
                    }
                </motion.div>
            </motion.section>
        </>

    )
}